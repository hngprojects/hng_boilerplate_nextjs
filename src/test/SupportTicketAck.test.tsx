import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailTemplate from '../app/support-ticket-ack/page';

const mockProps = {
  title: 'Your ticket has been opened',
  image: 'https://via.placeholder.com/150',
  name: 'John Doe',
  supportTicketId: 'BP01733',
  subject: 'Account Login issue',
  description: 'I tried login into my account and have been seeing errors',
  priority: 'High',
  status: 'Open',
  supportTicketLink: '#',
};

describe('EmailTemplate Component', () => {
  it('renders correctly with given props', () => {
    render(<EmailTemplate {...mockProps} />);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(`Hi ${mockProps.name},`)).toBeInTheDocument();
    expect(screen.getByTestId('supportTicketId')).toHaveTextContent(`Ticket ID: ${mockProps.supportTicketId}`);
    expect(screen.getByTestId('subject')).toHaveTextContent(`Subject: ${mockProps.subject}`);
    expect(screen.getByTestId('description')).toHaveTextContent(`Description: ${mockProps.description}`);
    expect(screen.getByTestId('priority')).toHaveTextContent(`Priority: ${mockProps.priority}`);
    expect(screen.getByTestId('status')).toHaveTextContent(`Status: ${mockProps.status}`);
    expect(screen.getByText('here')).toHaveAttribute('href', mockProps.supportTicketLink);
  });

  it('is responsive', () => {
    render(<EmailTemplate {...mockProps} />);
    
    // Check responsiveness by changing the window size
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    expect(screen.getByText(mockProps.title)).toBeVisible();
    
    window.innerWidth = 1200;
    window.dispatchEvent(new Event('resize'));
    expect(screen.getByText(mockProps.title)).toBeVisible();
  });

  it('receives dynamic data', () => {
    const dynamicProps = { ...mockProps, name: 'Jane Doe', status: 'Closed' };
    render(<EmailTemplate {...dynamicProps} />);
    
    expect(screen.getByText(`Hi Jane Doe,`)).toBeInTheDocument();
    expect(screen.getByText(`Closed`)).toBeInTheDocument();
  });
});
