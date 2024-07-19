// src/components/common/CookieFooter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import CookieFooter from '.';

describe('CookieFooter', () => {
    test('renders the required contents', () => {
        render(<CookieFooter />);

        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
        
        const privacyMessage = screen.getByText(/We Value your Privacy/i);
        expect(privacyMessage).toBeInTheDocument();
        
        const cookieDescription = screen.getByText(/Our website uses cookies to enhance your browsing experience, provide personalized content, and analyze site traffic. By clicking "Accept All", you consent to our use of cookies./i);
        expect(cookieDescription).toBeInTheDocument();
        
        const acceptButton = screen.getByText(/accept all cookies/i);
        const rejectButton = screen.getByText(/reject all/i);
        const settingsButton = screen.getByText(/cookie settings/i);
        expect(acceptButton).toBeInTheDocument();
        expect(rejectButton).toBeInTheDocument();
        expect(settingsButton).toBeInTheDocument();
    });

    test('hides the footer when any button is clicked', () => {
        render(<CookieFooter />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();

        const acceptButton = screen.getByText(/accept all cookies/i);
        fireEvent.click(acceptButton);
        expect(footerElement).not.toBeInTheDocument();

        render(<CookieFooter />);
        const rejectButton = screen.getByText(/reject all/i);
        fireEvent.click(rejectButton);
        expect(footerElement).not.toBeInTheDocument();
    });
});
