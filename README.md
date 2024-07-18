# hng_boilerplate_nextjs

## Overview

[Description]

## Getting Started

In order to run this app locally, you should have the following programs installed on your computer:

- [nodejs](https://nodejs.org/)>=20.0.0
- [pnpm](https://yarnpkg.com/)>=9.4.0

#### Clone this repository

```
git clone <git@github.com:hngprojects/<repo-name>.git
cd <repo-name>
```

#### Install dependencies

```
pnpm install
```

#### Start the server

```
pnpm dev
```

#### Using the Badge component
This component has 4 variants: 
- Default: A default slate coloured label (and icon if specified) with a lighter slate background
- Primary: An orange coloured label (and icon if specified) with a lighter orange background
- Success: A green coloured label (and icon if specified) with a lighter green background
- Error: A red coloured label (and icon if specified) with a lighter red background

It accepts 2 mandatory 'label' and 'variant' arguments, and 1 optional 'icon' argument as props.
- Label: string
- Variant:  "default" | "primary" | "success" | "error"
- Icon?: React.ReactNode

##### The commponent can be rendered as follows:
- Import the component and its props ineterface

```
import Badge from "~/components/common/Badge/Badge";
import BadgeInterface from "~/components/common/Badge/BadgeInterface";
```
- Option1: Define the props object, render the component, and spread the object as props to it

```
const badgeProperties: BadgeInterface = {
    label: "label",
    variant: "error",
    icon: <p>&larr;</p>,
  };
  <Badge {...badgeProperties} />
```

- Option2: Render the component, and pass in the required props individually 

```
  <Badge label={"labeltest"} variant={"default"} />
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md)
