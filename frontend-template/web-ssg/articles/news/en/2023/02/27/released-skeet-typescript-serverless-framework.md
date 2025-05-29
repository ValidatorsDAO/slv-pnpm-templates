---
id: released-skeet-typescript-serverless-framework
title: Released Open Source TypeScript Serverless Framework "Skeet"
category: Press release
thumbnail: /news/2023/02/27/skeet.png
---

ELSOUL LABO B.V. (Headquarters: Amsterdam, the Netherlands) announced the
release of 'Skeet', an open source TypeScript full-stack serverless application
framework.

Skeet: https://skeet.dev

## Reduce app development and maintenance costs

![Skeet Top](/news/2023/02/27/skeet-top-en.png) The city is full of points that
can be improved through app development.

However, when you actually create and publish an app, it requires a relatively
wide range of knowledge and skills, so many teams are currently struggling.

It is always difficult to achieve both rapid development and maintainability,
and on top of that, it is necessary to solve complex phenomena during scaling,
so it takes time to obtain a reproducible development environment.

Under such circumstances, the shortage of IT resources is still accelerating.

We want to address this issue by lowering application development and
maintenance costs.

The Skeet is the open source TypeScript full-stack serverless application
framework.

It allows small developers teams to quickly launch apps and maintain them over
the long term.

## The choice has been TypeScript

We have tried various languages from Ruby to Rust and felt good and bad with
each, but we feel that TypeScript is a very well-balanced language. The whole
thing safer, making it easier to keep the code easy to develop and maintain at
scale. I really appreciate it because it works still so fast.

The growth of the Node.js ecosystem in recent years has been remarkable.

Prisma is now a very good data ORM, allowing for fast schema-driven development
and automatically optimizing and solving problems such as the N+1 problem that
you end up having to deal with. DB migration, which used to be a hassle, has
been simplified by automatically responding to changes in Prisma schema. Skeet
is paired with Nexus to auto-generate the Prisma schema to his GraphQL endpoint
(resolvers).

The combination of TypeScript x ESLint x Prettier and editor completion (VSCode
recommended) is outstanding, and you can get a development environment that is
fast and reduces mistakes.

## Ready to deploy

Deployment has been a headache for application developers. Impressively, it
always feels like the local environment and the production environment are
different things. Logs? Why aren't you born by default?

Skeet solves this problem. Projects are born deployable from the start and are
all containerized. His CI/CD with GitHub Actions comes standard and is designed
to continuously test changes and deploy those that pass.

Supports flexible access scale using Load Balancer and security with Cloud
Armor. Auto-scaling Cloud Run allows both APIs and Workers to operate within a
private network. It is designed to stabilize communication using Cloud Tasks for
task processing, and it is possible to deploy and manage everything from Skeet
CLI.

All these logs are output to the Cloud Logs (administration screen), so
administrators can safely check the status of the service wherever they are.

With Skeet, you can start writing your business logics as soon as you design
your data model, and you have a continuous deployment and medium-scale app
publishing environment.

Skeet Docs: https://skeet.dev/doc/

## Roadmap

As a future roadmap, we will first try to improve the documentation.

The Skeet backend is already available and we are looking for developer
feedbacks.

The Skeet frontend is currently under development in React Native and will be
released soon. SSG templates will be built into the CLI (We will be able to
start building it by the command), but we are currently exposing our template
repository. (https://github.com/elsoul/skeet-web-template)

Thank you for your continued support of Skeet.

From the Skeet Dev Team
