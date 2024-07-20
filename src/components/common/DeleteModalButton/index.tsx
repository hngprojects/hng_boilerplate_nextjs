import React from 'react';

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const DeleteModalButton = ({ title, className, onClick }:ButtonProps) => {
  return (
    <button
      className= {`px-[16px] py-[8px] rounded-[6px] text-[14px] leading-[24px] font-[500] duration-200 ease-in-out w-[76px] cursor-pointer  ${className}`}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default DeleteModalButton;
