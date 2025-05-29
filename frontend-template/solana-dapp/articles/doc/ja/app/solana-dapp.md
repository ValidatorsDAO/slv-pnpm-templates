---
id: app-solana-dapp
title: Solana dApp クイックスタート
description: SLV - Solana dApp クイックスタート
---

Demo: https://solana-dapp.slv.dev/

Code: https://github.com/ValidatorsDAO/slv/tree/main/frontend-template/solana-dapp

## Features

- Edge-Native
- Static Site Generation
- i18n Native
- Next.js App Router
- React Compiler (Always optimizes memoization for production)
- Solana Wallet Connection
- Solana Web3.js
- Solana Blinks Actions Interface
- Green Coding

## Built with

- [Next.js](https://nextjs.org/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [React Compiler](https://react.dev/learn/react-compiler)
- [shadcn/ui](https://ui.shadcn.com/)
- [Origin UI](https://originui.com/)
- [Prism UI](https://prismui.tech/)
- [motion](https://motion.dev/)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [Solana Web3.js](https://github.com/solana-labs/solana-web3.js/)
- [Solana Wallet Adapter](https://github.com/anza-xyz/wallet-adapter)
- [Solana Blinks Actions Interface](https://github.com/dialectlabs/blinks)

## Getting Started

First, run the development server:

```bash
pnpm i
pnpm dev
```

Open [http://localhost:4242](http://localhost:4242) with your browser to see the
result.

### Solana RPC Endpoint

It's recommended to set your own Solana RPC endpoint, as the default mainnet
endpoint is few times limited, which could lead to 429 errors (too many
requests).

No worries, you can get free credit for a Solana RPC endpoint at ERPC - Enhanced
Solana RPC.

ERPC: https://erpc.global

Setting Example (.env.local):

```
NEXT_PUBLIC_SOLANA_ENDPOINT=https://edge.erpc.global?api-key=<your-api-key>
```

### GitHub Actions Deployment

If you're using GitHub Actions for auto-deployment, don't forget to set your
repository secrets.

For example:

- `NEXT_PUBLIC_SOLANA_ENDPOINT`: Your Solana RPC endpoint
- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

### Add Components

You can add the high-quality UI components from
[shadcn/ui](https://ui.shadcn.com/)

Also you can use [Origin UI](https://originui.com/) and
[Prism UI](https://prismui.tech/) for more components.

You can also use [v0](https://v0.dev/) which is a UI generator with shadcn/ui
from simple text prompts and images.

## References

- [Next.js App Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Static Site Generation (SSG)](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Solana](https://solana.com/)
- [Solana Actions and Blinks](https://solana.com/docs/advanced/actions)

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/ValidatorsDAO/slv This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the
[Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

## Code of Conduct

Everyone interacting in the Skeet project’s codebases, issue trackers, chat
rooms and mailing lists is expected to follow the
[code of conduct](https://github.com/ValidatorsDAO/slv/blob/main/CODE_OF_CONDUCT.md).
