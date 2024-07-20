import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserSection from '~/components/layouts/homepage/UserSection';

describe('UserSection Component', () => {
    it('renders the heading with the correct text', () => {
        render(<UserSection />);
        const heading = screen.getByRole('heading', {
            name: /More than 200 Users make use of our Boilerplate/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it('renders the Unsplash logo', () => {
        render(<UserSection />);
        const unsplash = screen.getByTestId('unsplash-logo');
        expect(unsplash).toBeInTheDocument();
    });

    it('renders the Notion logo', () => {
        render(<UserSection />);
        const notion = screen.getByTestId('notion-logo');
        expect(notion).toBeInTheDocument();
    });

    it('renders the Intercom logo', () => {
        render(<UserSection />);
        const intercom = screen.getByTestId('intercom-logo');
        expect(intercom).toBeInTheDocument();
    });

    it('renders the Descript logo', () => {
        render(<UserSection />);
        const descript = screen.getByTestId('descript-logo');
        expect(descript).toBeInTheDocument();
    });

    it('renders the Grammarly logo', () => {
        render(<UserSection />);
        const grammarly = screen.getByTestId('grammarly-logo');
        expect(grammarly).toBeInTheDocument();
    });
});
