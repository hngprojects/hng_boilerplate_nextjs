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

## Contributing

#### Using the waitlist hero card component
It accepts 3 mandatory arguments and 1 optiona className as it's props, cardTitle, cardDescription and cardIcon.
- cardTitle: string
- cardDescription:  string
- cardIcon: string - Pass the absolute path of the icon to icon property

##### The commponent can be rendered as follows:
```
import WaitlistCard, { WaitlistCardProps } from '~/components/common/Waitlist/WaitlistCard';

const cardProp: WaitlistCardProps = {
  cardTitle: "Easy Customization",
  cardDescription: "Hello there!",
  cardIcon:"../../../public/Wailtist/vector-icon.svg"
}

<WaitlistCard {...cardProp} /> Use this way by spreading the card property
```

- OR

```
import WaitlistCard from '~/components/common/Waitlist/WaitlistCard';

<WaitlistCard
  cardTitle={"Easy Customization"}
  cardDescription={cardDescription}
  cardIcon={require("../../public/Wailtist/vector-icon.svg")}
/>
```

- Please do not alterate the Waitlist Hero Card Component, kindly reach out to me.

Please see [CONTRIBUTING](CONTRIBUTING.md)
