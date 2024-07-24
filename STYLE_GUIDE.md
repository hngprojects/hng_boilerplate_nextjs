# Style Guides

## Getting Started

In order to run this app locally, you should have the following programs installed on your computer:

- [Node.js](https://nodejs.org/) version 20.0.0 or higher
- [pnpm](https://yarnpkg.com/) version 9.4.0 or higher

##### Clone this repository

```
git clone git@github.com/hngprojects/hng_boilerplate_nextjs.git
cd hng_boilerplate_nextjs
```

##### Install dependencies

```
pnpm install
```

##### Start the server

```
pnpm run dev
```

## Colors

##### Navigate to

```
htpp://localhost:3000/guides
```

## Components

##### Navigate to

```
htpp://localhost:3000/guides
```

## Prerequisites

- Follow all folder and file structure formats
- Use the provided global alias for all imports, `~/*` representing `./src/*`
  ```
  "paths": {
    "~/*": [
      "./src/*"
    ]
  },
  ```
- Use the global CSS variables
- Use Tailwind CSS and shadCN exclusively.
- UI components should be stored in `~/components/common`
- Modal components should be stored in `~/components/modals`
- Layout components should be stored in `~/components/layouts`
- All tests should be stored in `~/test`
- All emails are to be built with react email components and tailwind and stored in `~/emails/templates`

## Contributing

Please read the [CONTRIBUTING](./CONTRIBUTING.md) file before making any contributions.
