import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialCard from '~/components/layouts/homepage/TestimonialCard';

describe('TestimonialCard Component', () => {
    const props = {
        image: '/images/testimonial-image.svg',
        content: "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
        name: 'John Doe',
        stack: 'Full Stack Developer',
    };

    it('renders the testimonial content', () => {
        render(<TestimonialCard {...props} />);
        const content = screen.getByText(/I've been using this web hosting service for over a year and I'm really impressed with the uptime and support./i);
        expect(content).toBeInTheDocument();
    });

    it('renders the testimonial name', () => {
        render(<TestimonialCard {...props} />);
        const name = screen.getByText(props.name);
        expect(name).toBeInTheDocument();
    });

    it('renders the testimonial stack', () => {
        render(<TestimonialCard {...props} />);
        const stack = screen.getByText(props.stack);
        expect(stack).toBeInTheDocument();
    });

    it('renders the image with the correct src and alt attributes', () => {
        render(<TestimonialCard {...props} />);
        const image = screen.getByAltText('testimonial-image');
        expect(image).toHaveAttribute('src', props.image);
        expect(image).toHaveAttribute('alt', 'testimonial-image');
    });

    it('renders the Rating component', () => {
        render(<TestimonialCard {...props} />);
        const rating = screen.getByTestId('rating');
        expect(rating).toBeInTheDocument();
    });
});
