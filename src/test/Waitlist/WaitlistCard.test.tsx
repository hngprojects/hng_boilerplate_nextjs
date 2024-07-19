import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WaitlistCard, { WaitlistCardProps } from '~/components/common/Waitlist/WaitlistCard';

const cardProp: WaitlistCardProps = {
  cardTitle: "Easy Customization",
  cardDescription: "Hello there!",
  cardIcon:"../../../public/Wailtist/vector-icon.svg"
}

describe("WaitlistCard", () => {

  it("renders the WaitlistCard properly", () => {
    render(
      <WaitlistCard {...cardProp} />
    );
    // screen.debug();
  })

  it("Image must have alt text", () => {
    render(
      <WaitlistCard {...cardProp} />
    );
    expect(screen.getByRole('image')).toHaveAttribute('alt');
  })
})

describe("Waitlist card component props", () => {
  it("renders the component with the card title", () => {
    expect.assertions(1);
    render(
      <WaitlistCard {...cardProp} />
    );
    const cardTitleRole = screen.getByRole('cardTitle');
    expect(cardTitleRole).toBeInTheDocument();
  })

  it("renders the component with the card description", () => {
    expect.assertions(1);
    render(
      <WaitlistCard {...cardProp} />
    );
    const cardDescriptionRole = screen.getByRole('cardTitle');
    expect(cardDescriptionRole).toBeInTheDocument();
  })

  it("renders the component with the card icon", () => {
    expect.assertions(1);
    render(
      <WaitlistCard {...cardProp} />
    );
    const cardIconRole = screen.getByRole('image');
    expect(cardIconRole).toBeInTheDocument();
  })
})