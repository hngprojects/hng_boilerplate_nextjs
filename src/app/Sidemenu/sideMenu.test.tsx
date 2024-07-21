import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideMenu from './sideMenu';


describe('SideMenu Component', () => {
  const TestComponent = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );


  test('renders SideMenu component correctly', () => {
    render(
      <SideMenu>
        <TestComponent>Test Content</TestComponent>
      </SideMenu>
    );

    expect(screen.getByText('Boilerplate.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search option...')).toBeInTheDocument();

    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
  });

  test('toggles sidebar visibility when menu icon is clicked', () => {
    render(
      <SideMenu>
        <TestComponent>Test Content</TestComponent>
      </SideMenu>
    );

    const menuIcon = screen.getByRole('button', { name: /menu/i });
    const sidebar = screen.getByRole('navigation');

    expect(sidebar).toHaveClass('left-[-100%]');

    fireEvent.click(menuIcon);
    expect(sidebar).toHaveClass('left-0');

    fireEvent.click(menuIcon);
    expect(sidebar).toHaveClass('left-[-100%]');
  });

  test('highlights the active menu item based on the current pathname', () => {
    render(
      <SideMenu>
        <TestComponent>Test Content</TestComponent>
      </SideMenu>
    );

    const integrationsItem = screen.getByText('Integrations');
    expect(integrationsItem.closest('div')).not.toHaveClass('bg-[#F97316]', 'text-white');
  });
});
