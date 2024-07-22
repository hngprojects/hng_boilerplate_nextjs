import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserListTable from './UsersTable';
import { vi } from 'vitest'

const users = [
    { id: 1, name: 'John Doe', phoneNumber: '1234567890', email: 'johndoe@example.com', status: 'active', dateCreated: '2023-07-01', image: 'dummyImg' },
    { id: 2, name: 'Jane Smith', phoneNumber: '0987654321', email: 'janesmith@example.com', status: 'inactive', dateCreated: '2023-07-02', image: 'dummyImg' },
];

const addNewUser = vi.fn();
const deleteUser = vi.fn();
const editUser = vi.fn();

describe('UserListTable', () => {
    test('renders without crashing', () => {
        render(<UserListTable users={users} addNewUser={addNewUser} deleteUser={deleteUser} editUser={editUser} />);
        expect(screen.getByText('Users')).toBeInTheDocument();
    });

    test('calls addNewUser when "Add New User" button is clicked', () => {
        render(<UserListTable users={users} addNewUser={addNewUser} deleteUser={deleteUser} editUser={editUser} />);
        const addButton = screen.getByText('Add New User');
        fireEvent.click(addButton);
        expect(addNewUser).toHaveBeenCalled();
    });

    test('calls editUser when "Edit" is clicked', () => {
        render(<UserListTable users={users} addNewUser={addNewUser} deleteUser={deleteUser} editUser={editUser} />);
        const editButton = screen.getAllByText('Edit')[0];
        fireEvent.click(editButton);
        expect(editUser).toHaveBeenCalledWith(users[0].id);
    });

    test('calls deleteUser when "Delete" is clicked', () => {
        render(<UserListTable users={users} addNewUser={addNewUser} deleteUser={deleteUser} editUser={editUser} />);
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(deleteUser).toHaveBeenCalledWith(users[0].id);
    });
});
