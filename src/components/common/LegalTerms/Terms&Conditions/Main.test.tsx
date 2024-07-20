import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from './Main';


vi.mock('./Breadcrumb', () => ({ default: () => 
    <div data-testid="mock-breadcrumb">Breadcrumb</div> }));
vi.mock('./UserObligations', () => ({ default: () => <div data-testid="mock-user-obligations">UserObligations</div> }));
vi.mock('./AcceptableUse', () => ({ default: () => <div data-testid="mock-acceptable-use">AcceptableUse</div> }));
vi.mock('./IntellectualProperty', () => ({ default: () => <div data-testid="mock-intellectual-property">IntellectualProperty</div> }));
vi.mock('./Disclaimer', () => ({ default: () => <div data-testid="mock-disclaimer">Disclaimer</div> }));
vi.mock('./GoverningLaws', () => ({ default: () => <div data-testid="mock-governing-laws">GoverningLaws</div> }));
vi.mock('./TableOfContents', () => ({ default: () => <div data-testid="mock-table-of-contents">TableOfContents</div> }));

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid="mock-link">{children}</a>
  ),
}));

describe('Main Component', () => {
  beforeEach(() => {
    render(<Main />);
  });

  it('renders all sub-components', () => {
    expect(screen.getByTestId('mock-breadcrumb')).toBeInTheDocument();
    expect(screen.getByTestId('mock-user-obligations')).toBeInTheDocument();
    expect(screen.getByTestId('mock-acceptable-use')).toBeInTheDocument();
    expect(screen.getByTestId('mock-intellectual-property')).toBeInTheDocument();
    expect(screen.getByTestId('mock-disclaimer')).toBeInTheDocument();
    expect(screen.getByTestId('mock-governing-laws')).toBeInTheDocument();
    expect(screen.getByTestId('mock-table-of-contents')).toBeInTheDocument();
  });

  it('renders the Introduction section', () => {
    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Boilerplate Hng/)).toBeInTheDocument();
  });

  it('renders the Changes to Terms section', () => {
    expect(screen.getByText('Changes to Terms')).toBeInTheDocument();
    expect(screen.getByText(/We reserve the right to modify/)).toBeInTheDocument();
  });

  it('renders the Contact Information section', () => {
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText(/For any questions or concerns/)).toBeInTheDocument();
  });

  it('renders the Last Updated section', () => {
    expect(screen.getByText('Last Updated')).toBeInTheDocument();
    expect(screen.getByText(/These Terms and Conditions were last updated/)).toBeInTheDocument();
  });

  it('renders the correct last updated date', () => {
    const expectedDate = '20th July, 2024';
    expect(screen.getByText(new RegExp(expectedDate))).toBeInTheDocument();
  });

  it('renders the Privacy Policy link', () => {
    const link = screen.getByTestId('mock-link');
    expect(link).toHaveTextContent('Privacy Policy page.');
    expect(link).toHaveAttribute('href', '/privacy_policy');
  });
});