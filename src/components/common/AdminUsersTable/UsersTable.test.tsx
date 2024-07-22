import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { vi } from "vitest";

import UserListTable from "./UsersTable";

const users = [
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "1234567890",
    email: "johndoe@example.com",
    status: "active",
    dateCreated: "2023-07-01",
    image: "dummyImg",
  },
  {
    id: 2,
    name: "Jane Smith",
    phoneNumber: "0987654321",
    email: "janesmith@example.com",
    status: "inactive",
    dateCreated: "2023-07-02",
    image: "dummyImg",
  },
];

const addNewUser = vi.fn();
const deleteUser = vi.fn();
const editUser = vi.fn();

describe("userListTable", () => {
  it("renders without crashing", () => {
    expect.hasAssertions();
    render(
      <UserListTable
        users={users}
        addNewUser={addNewUser}
        deleteUser={deleteUser}
        editUser={editUser}
      />,
    );
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  it('calls addNewUser when "Add New User" button is clicked', () => {
    expect.hasAssertions();
    render(
      <UserListTable
        users={users}
        addNewUser={addNewUser}
        deleteUser={deleteUser}
        editUser={editUser}
      />,
    );
    const addButton = screen.getByText("Add New User");
    fireEvent.click(addButton);
    expect(addNewUser).toHaveBeenCalledWith();
  });

  it('calls editUser when "Edit" is clicked', () => {
    expect.hasAssertions();
    render(
      <UserListTable
        users={users}
        addNewUser={addNewUser}
        deleteUser={deleteUser}
        editUser={editUser}
      />,
    );
    const editButton = screen.getAllByText("Edit")[0];
    fireEvent.click(editButton);
    expect(editUser).toHaveBeenCalledWith(users[0].id);
  });

  it('calls deleteUser when "Delete" is clicked', () => {
    expect.hasAssertions();
    render(
      <UserListTable
        users={users}
        addNewUser={addNewUser}
        deleteUser={deleteUser}
        editUser={editUser}
      />,
    );
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    expect(deleteUser).toHaveBeenCalledWith(users[0].id);
  });
});
