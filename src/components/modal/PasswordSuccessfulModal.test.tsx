import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react';
import PasswordSuccessfulModal from './PasswordSuccessfulModal';

test('renders the modal when show is true', () => {
    const { getByText } = render(
      <PasswordSuccessfulModal show={true} onClose={() => {}} />
    );
    expect(getByText('Password Successfully Updated!')).toBeInTheDocument();
    expect(
      getByText(
        'Your password has been successfully updated! You can now log in with your new password.'
      )
    ).toBeInTheDocument();
  });
  
  test('close the modal when continue is clicked', async () => {
    const user = userEvent.setup()
    let modalClosed = false;
    const handleClose = () => {
      modalClosed = true;
    };
    const { getByText } = render(
      <PasswordSuccessfulModal show={true} onClose={handleClose} />
    );
  
    await user.click(getByText('Continue'));
  
    expect(modalClosed).toBe(true);
  });
  
  test('close the modal when outside the modal is clicked', async () => {
    const user = userEvent.setup()
    let modalClosed = false;
    const handleClose = () => {
      modalClosed = true;
    };
    const { getByTestId } = render(
      <PasswordSuccessfulModal show={true} onClose={handleClose} />
    );
  
    await user.click(getByTestId('overlay'));

    expect(modalClosed).toBe(true);
  });