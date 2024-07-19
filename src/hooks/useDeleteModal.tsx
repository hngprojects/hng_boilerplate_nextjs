import { useState } from 'react';

export const useDeleteModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openDeleteModal = () => {
    console.log('Opening modal');
    setIsVisible(true);
  };

  const closeDeleteModal = () => {
    console.log('Closing modal');
    setIsVisible(false);
  };

  return { isVisible, closeDeleteModal, openDeleteModal };
};
