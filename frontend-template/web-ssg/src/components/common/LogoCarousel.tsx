'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useTheme } from '@/hooks/utils/useTheme'

// Define types
interface Logo {
  name: string
  src: string
  invertSrc: string
}

interface LogoColumnProps {
  logos: Logo[]
  columnIndex: number
  currentTime: number
}

// Main component
export function LogoCarousel({
  columns = 2,
  logos,
}: {
  columns?: number
  logos: Logo[]
}) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([])
  const [time, setTime] = useState(0)
  const CYCLE_DURATION = 3200

  // Define logos using public SVGs

  // Distribute logos across columns
  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5)
      const result: Logo[][] = Array.from({ length: columns }, () => [])

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo)
      })

      // Ensure equal length columns
      const maxLength = Math.max(...result.map((col) => col.length))
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
        }
      })

      return result
    },
    [columns],
  )

  // Initialize logo columns
  useEffect(() => {
    setLogoColumns(distributeLogos(logos))
  }, [logos, distributeLogos])

  // Update time for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center gap-4 py-8">
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  )
}

// Column component
function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 3200
  const columnDelay = columnIndex * 240
  const adjustedTime =
    (currentTime + columnDelay) % (CYCLE_DURATION * logos.length)
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION)
  const currentLogo = logos[currentIndex]
  const { theme, mounted } = useTheme()

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.name}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: '10%', opacity: 0 }}
          animate={{
            y: '0%',
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: '-20%',
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          {mounted && (
            <Image
              src={theme === 'dark' ? currentLogo.invertSrc : currentLogo.src}
              alt={currentLogo.name}
              width={120}
              height={40}
              className="h-auto max-h-[60%] w-auto max-w-[80%] object-contain"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
