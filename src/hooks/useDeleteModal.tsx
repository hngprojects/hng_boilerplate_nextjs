import { useState } from 'react';

export const useDeleteModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const closeDeleteModal = () => {
    setIsVisible(!isVisible);
  };

  return { isVisible, closeDeleteModal };
};
