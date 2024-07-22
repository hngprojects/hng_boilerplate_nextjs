import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RolesList from '~/components/RolesList';

describe('RolesList Component', () => {
  it('should display a list of roles', () => {
    render(<RolesList />);

    const roles = ['Guest', 'User', 'Manager', 'Project Lead', 'Administrator'];

    roles.forEach((role) => {
      expect(screen.getByText(role)).toBeInTheDocument();
    });
  });

  it('should highlight the selected role and display permissions', () => {
    render(<RolesList />);

    const roleElement = screen.getByText('User');
    fireEvent.click(roleElement);

    expect(roleElement).toHaveClass('bg-orange-500 text-white');
    expect(screen.getByText('Permissions')).toBeInTheDocument();
    expect(screen.getByText('See the list of permissions for this role')).toBeInTheDocument();

    const permissions = [
      'Can view users',
      'Can create users',
      'Can edit users',
      'Can blacklist/whitelist users',
    ];

    permissions.forEach((permission) => {
      expect(screen.getByText(permission)).toBeInTheDocument();
    });
  });

  it('should toggle permissions on click', () => {
    render(<RolesList />);

    const roleElement = screen.getByText('User');
    fireEvent.click(roleElement);

    const permissionCheckbox = screen.getByLabelText('Can create users');
    expect(permissionCheckbox).toBeInTheDocument();

    fireEvent.click(permissionCheckbox);
    expect(permissionCheckbox).toBeChecked();

    fireEvent.click(permissionCheckbox);
    expect(permissionCheckbox).not.toBeChecked();
  });
});
