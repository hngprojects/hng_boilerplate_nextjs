import { useState } from 'react';

export const useDeleteModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openDeleteModal = () => {
    setIsVisible(!isVisible);
  };

  const closeDeleteModal = () => {
    setIsVisible(false);
  };

  return { isVisible, closeDeleteModal, openDeleteModal };
};
