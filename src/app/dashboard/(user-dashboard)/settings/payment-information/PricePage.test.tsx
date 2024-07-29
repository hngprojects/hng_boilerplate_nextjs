import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the 'toBeInTheDocument' matcher
import { describe, it, expect } from 'vitest';
import PricingPage from './page';

describe('PricingPage', () => {
  it('should render the current plan section', () => {
    render(<PricingPage />);
    const currentPlanHeading = screen.getByText(/Current Plan/i);
    expect(currentPlanHeading).toBeInTheDocument();

    const freePlanTitle = screen.getByText('Free');
    expect(freePlanTitle).toBeInTheDocument();

    const freePlanDescription = screen.getByText(/Your account is on a free 90-day trial/i);
    expect(freePlanDescription).toBeInTheDocument();

    const freePlanPrice = screen.getByText('$0/month');
    expect(freePlanPrice).toBeInTheDocument();
  });

  it('should render all subscription plans', () => {
    render(<PricingPage />);
    const plans = ['Free', 'Basic', 'Advanced', 'Premium'];

    plans.forEach(plan => {
      const planTitle = screen.getByText(plan);
      expect(planTitle).toBeInTheDocument();
    });
  });

  it('should render the highlights section', () => {
    render(<PricingPage />);
    const highlightsHeading = screen.getByText('Highlights');
    expect(highlightsHeading).toBeInTheDocument();

    const highlightsItems = [
      '10 Projects',
      'Up to 10 subscribers',
      'Advanced analytics',
      '100 projects',
      'Up to 50 subscribers',
      '24-hour support',
      '200 projects',
      'Up to 100 subscribers',
      'Marketing advisor',
      '300 Projects',
      'Up to 500 subscribers',
    ];

    highlightsItems.forEach(item => {
      const highlightItem = screen.getByText(item);
      expect(highlightItem).toBeInTheDocument();
    });
  });

  it('should render the compare all features section', () => {
    render(<PricingPage />);
    const compareFeaturesText = screen.getByText(/Compare all features/i);
    expect(compareFeaturesText).toBeInTheDocument();
  });
});