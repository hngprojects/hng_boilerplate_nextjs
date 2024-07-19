import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HowItWorks from '~/components/layouts/homepage/HowItWorks';

describe('HowItWorks Component', () => {
    it('renders the heading', () => {
        render(<HowItWorks />);
        const heading = screen.getByRole('heading', {
            name: /how it works: experience the benefits of using our product with every step./i,
        });
        expect(heading).toBeInTheDocument();
    });

    it('renders the description paragraph', () => {
        render(<HowItWorks />);
        const paragraph = screen.getByText(/we designed our product to simplify your life. it offers a comprehensive solution. here's how it works and how it benefits you at each stage./i);
        expect(paragraph).toBeInTheDocument();
    });

    it('renders the Pre-Built Sections component', () => {
        render(<HowItWorks />);
        const preBuilt = screen.getByTestId("prebuilt");
        expect(preBuilt).toBeInTheDocument();
        const preBuiltDescription = screen.getByTestId("section");
        expect(preBuiltDescription).toBeInTheDocument();
    });

    it('renders the Scalable Foundation component', () => {
        render(<HowItWorks />);
        const scalable = screen.getByTestId("scalable");
        expect(scalable).toBeInTheDocument();
        const scalableDescription = screen.getByTestId("boilerplate");
        expect(scalableDescription).toBeInTheDocument();
    });

    it('renders the Easy Customization component', () => {
        render(<HowItWorks />);
        const easyCustomization = screen.getByTestId("easy");
        expect(easyCustomization).toBeInTheDocument();
        const easyCustomizationDescription = screen.getByTestId("tailor");
        expect(easyCustomizationDescription).toBeInTheDocument();
    });
});
