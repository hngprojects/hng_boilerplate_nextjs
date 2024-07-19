import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testimonials from '~/components/layouts/homepage/Testimonials';
import { testimonials } from '~/components/layouts/homepage/testimonials-data';

describe('Testimonials Component', () => {
    it('renders the testimonials heading', () => {
        render(<Testimonials />);
        const heading = screen.getByRole('heading', {
            name: /client testimonials/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it('renders the testimonials paragraph', () => {
        render(<Testimonials />);
        const paragraph = screen.getByText(/don't just take our word for it - see what actual users of our product have to say about their experience./i);
        expect(paragraph).toBeInTheDocument();
    });

    it('renders the navigation buttons', () => {
        render(<Testimonials />);
        const prevButton = screen.getByTestId('custom-prev');
        const nextButton = screen.getByTestId('custom-next');
        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    });

    it('renders the Swiper component with testimonials', () => {
        render(<Testimonials />);
        const testimonialCards = screen.getAllByTestId('testimonial-card');
        expect(testimonialCards.length).toBeGreaterThan(0);
    });

    it('renders the correct number of Swiper slides', () => {
        render(<Testimonials />);
        const slides = screen.getAllByRole('group');
        expect(slides.length).toBe(testimonials.length);
    });
});
