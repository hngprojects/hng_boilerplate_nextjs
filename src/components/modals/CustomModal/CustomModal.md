CustomModal Component

The CustomModal component is a customizable modal dialog box built using React and @headlessui/react. This component provides various options to control its appearance and behavior, making it flexible for different use cases.


Usage

import CustomModal from './path/to/CustomModal';

<CustomModal
  onOpen={open}
  toggleState={setOpen}
  buttonAction={() => { console.log('Action') }}
  showButtons={true}
  actionButtonText="Delete"
  actionButtonColor="primary"
  buttonPosition="right"p
  addCloseButton={true}
  >
  <div className="flex flex-col w-[400px]">
    <h1 className="font-bold">Are you sure you want to delete?</h1>
    <p>This action cannot be undone. This will permanently delete this user from the database.</p>
  </div>
</CustomModal>


CustomModal Component
The CustomModal component is a customizable modal dialog box built using React and @headlessui/react. This component provides various options to control its appearance and behavior, making it flexible for different use cases.

Usage

import CustomModal from './path/to/CustomModal';

<CustomModal
  onOpen={open}
  toggleState={setOpen}
  buttonAction={() => { console.log('Action') }}
  showButtons={true}
  actionButtonText="Delete"
  actionButtonColor="primary"
  buttonPosition="right"
  addCloseButton={true}
  >
  <div className="flex flex-col w-[400px]">
    <h1 className="font-bold">Are you sure you want to delete?</h1>
    <p>This action cannot be undone. This will permanently delete this user from the database.</p>
  </div>
</CustomModal>

Props


onOpen
Type: boolean
Description: Controls the visibility of the modal. When true, the modal is open. When false, the modal is closed.

toggleState
Type: () => void
Description: Function to toggle the open state of the modal. This function is called to open or close the modal.

buttonAction
Type: () => void
Description: Function to be executed when the action button is clicked. This allows you to define the action that should be taken when the user confirms the action in the modal.

showButtons
Type: boolean
Description: Determines whether the action buttons are displayed at the bottom of the modal. When true, the buttons are shown.

actionButtonText
Type: string
Description: Text to be displayed on the action button. For example, "Delete", "Confirm", etc.

actionButtonColor
Type: string
Description: Defines the color variant of the action button.
Note!! use color variant string from Custom button component

buttonPosition
Type: string
Description: Defines the position of the buttons. Can be "right", "left", or "center".

addCloseButton
Type: boolean
Description: When true, adds a "Close" button to the modal.


Example

import { useState } from 'react';
import CustomModal from './path/to/CustomModal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <CustomModal
        onOpen={open}
        toggleState={() => setOpen(!open)}
        buttonAction={() => { console.log('Action') }}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        buttonPosition="right"
        addCloseButton={true}
        >
        <div className="flex flex-col w-[400px]">
          <h1 className="font-bold">Are you sure you want to delete?</h1>
          <p>This action cannot be undone. This will permanently delete this user from the database.</p>
        </div>
      </CustomModal>
    </div>
  );
}

export default App;

Additional Notes
Ensure that you pass the correct props to the CustomModal component for the desired behavior.
The toggleState function should be defined to manage the open state of the modal.
The buttonAction function should contain the logic that should be executed when the action button is clicked.
Use showButtons, actionButtonText, actionButtonColor, and buttonPosition props to customize the appearance and behavior of the modal buttons.




