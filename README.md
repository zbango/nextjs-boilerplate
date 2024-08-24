# Boilerplate and Starter for Next.js 14+

This repository is inspired in the work done by [CreativeDesignsGuru](https://creativedesignsguru.com) but customized for my personal purposes.

### Requirements

- Node.js 20+ and yarn

### Getting started

Install dependencies.

```shell
yarn install
```

You need to set your env.local file with the following variables
```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_SENTRY_DSN=
LOGTAIL_SOURCE_TOKEN=
```
Also be sure to have these variables that would be needed to be set in Github Actions

`CODECOV_TOKEN` [Codecov](https://about.codecov.io/codecov-free-trial)

`CHECKLY_ACCOUNT_ID` [Checkly](https://www.checklyhq.com)

Then, you can run the project locally in development mode with live reload by executing:

```shell
yarn run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Customization

Make a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/BaseTemplate.tsx`: default theme
- `next.config.mjs`: Next.js configuration
- `.env`: default environment variables

### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── models                      # Entity models
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
└── tsconfig.json                   # TypeScript configuration
```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
yarn run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Testing

All unit tests are located with the source code inside the same directory. So, it makes it easier to find them. The project uses Vitest and React Testing Library for unit testing. You can run the tests with:

```shell
yarn run test
```

### Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```shell
npx playwright install # Only for the first time in a new environment
npm run test:e2e
```

In the local environment, visual testing is disabled. The terminal will display the message `[percy] Percy is not running, disabling snapshots.`. By default, the visual testing only runs in GitHub Actions.

### Useful commands

#### Bundle Analyzer

```shell
yarn run build-stats
```

By running the command, it'll automatically open a new browser window with the results.

### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.
