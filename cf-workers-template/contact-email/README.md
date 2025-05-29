<p align="center">
  <a href="https://slv.dev/" target="_blank">
    <img src="https://storage.slv.dev/SLVogp.jpg" alt="SLV" />
  </a>

<a href="https://twitter.com/intent/follow?screen_name=slvSOLANA" target="_blank">
    <img src="https://img.shields.io/twitter/follow/slvSOLANA.svg?label=Follow%20@slvSOLANA" alt="Follow @slvSOLANA" />
  </a>
<a aria-label="License" href="https://github.com/ValidatorsDAO/slv/blob/master/LICENSE.txt">
    <img alt="" src="https://badgen.net/badge/license/Apache/blue">
  </a>
    <a aria-label="Code of Conduct" href="https://github.com/ValidatorsDAO/slv/blob/master/CODE_OF_CONDUCT.md">
    <img alt="" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg">
  </a>
</p>

Demo: https://web-ssg.slv.dev/

## Features

- Edge-Native
- React & Tailwind Email

<a href="https://www.thegreenwebfoundation.org/green-web-check/?url=https%3A%2F%2Fweb-ssg.slv.dev%2F">
  <img src="https://app.greenweb.org/api/v3/greencheckimage/web-ssg.slv.dev?nocache=true" alt="This website runs on green hosting - verified by thegreenwebfoundation.org" width="200px" height="95px">
</a>

## Built with

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Hono](https://hono.dev/)
- [Resend](https://resend.com/)
- [React Email](https://react.email/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

First, run the development server:

```bash
pnpm i
pnpm web-ssg:dev
```

Open [http://localhost:4242](http://localhost:4242) with your browser to see the
result.

Api is running on [http://localhost:4422](http://localhost:4422)

### GitHub Actions Deployment

If you're using GitHub Actions for auto-deployment, don't forget to set your
repository secrets.

For example:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

### Cloudflare Workers

In development, you need to create `dev.vars` file from `dev.vars.example`

In production, you need to add Secret Variables in Cloudflare Workers.

We need:

- `RESEND_API_KEY`: Your Resend API key

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
