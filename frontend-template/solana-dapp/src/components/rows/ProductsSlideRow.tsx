'use client'

import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import ProductsErpcRow from './products/ProductsErpcRow'
import ProductsValidatorsSolutionsRow from './products/ProductsValidatorsSolutionsRow'
import { cn } from '@/lib/utils'
import ProductsBuidlersCollectiveRow from './products/ProductsBuidlersCollectiveRow'
import DAOsEpicsRow from './daos/DAOsEpicsRow'
import DAOsValidatorsRow from './daos/DAOsValidatorsRow'
import ProductsElsolRow from '@/components/rows/products/ProductsElsolRow'

export default function ProductsSlideRow() {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 6400
          })
        ]}
        className={cn(
          'h-[896px] w-full hover:cursor-grab active:cursor-grabbing sm:h-[1152px]',
          'bg-gradient-to-b from-white via-zinc-100 to-white',
          'dark:from-zinc-950 dark:via-indigo-950 dark:to-zinc-950'
        )}
      >
        <CarouselContent>
          <CarouselItem>
            <ProductsValidatorsSolutionsRow />
          </CarouselItem>
          <CarouselItem>
            <ProductsErpcRow />
          </CarouselItem>
          <CarouselItem>
            <ProductsElsolRow />
          </CarouselItem>
          <CarouselItem>
            <ProductsBuidlersCollectiveRow />
          </CarouselItem>
          <CarouselItem>
            <DAOsEpicsRow />
          </CarouselItem>
          <CarouselItem>
            <DAOsValidatorsRow />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  )
}
