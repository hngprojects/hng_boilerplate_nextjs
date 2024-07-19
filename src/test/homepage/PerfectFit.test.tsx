import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerfectFit from '~/components/layouts/homepage/PerfectFit';

describe('PerfectFit Component', () => {
    it('renders the heading', () => {
        render(<PerfectFit />);
        const heading = screen.getByRole('heading', {
            name: /find the perfect fit/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it('renders the paragraph', () => {
        render(<PerfectFit />);
        const paragraph = screen.getByText(/choose the boilerplate plan that best suits your project needs and budget. all plans include access to our comprehensive library of pre-built sections, drag-and-drop customization./i);
        expect(paragraph).toBeInTheDocument();
    });

    it('renders the See Our Pricing Plan button', () => {
        render(<PerfectFit />);
        const button = screen.getByRole('button', { name: /see our pricing plan/i });
        expect(button).toBeInTheDocument();
    });

    it('applies the correct background color to the container', () => {
        render(<PerfectFit />);
        const container = screen.getByRole('heading').parentElement?.parentElement;
        expect(container).toHaveClass('bg-[#FBF3F3]');
    });

    it('applies the correct text color to the paragraph', () => {
        render(<PerfectFit />);
        const paragraph = screen.getByText(/choose the boilerplate plan that best suits your project needs and budget. all plans include access to our comprehensive library of pre-built sections, drag-and-drop customization./i);
        expect(paragraph).toHaveClass('text-[#525252]');
    });
});

