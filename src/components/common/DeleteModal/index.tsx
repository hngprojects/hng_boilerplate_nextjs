'use client';
import React from 'react'
import DeleteModalButton from "~/components/common/DeleteModalButton"
import { useDeleteModal } from '~/hooks/useDeleteModal';

const DeleteModal:React.FC = () => {
  const { isVisible, closeDeleteModal } = useDeleteModal()

  if (!isVisible) return null;
  return (
    <main className='absolute bg-[#141414] bg-opacity-[15%] w-full top-0 bottom-0 h-[1024px] z-[999] cursor-pointer' onClick={closeDeleteModal}>
        <div className='absolute left-[32.2%] top-[425px] w-[512px] bg-[#FAFAFA] p-[24px] rounded-[6px] '>
            <p className='text-[18px] font-[600] leading-[28px] text-[#0F172A] '>Delete Member</p>
            <p className='text-[14px] font-[400] leading-[16.69pxpx] text-[#64748B] my-[8px] '>Are you sure you want to delete Chad Bosewick? All of your data will be permanently removed. 
                This action cannot be undone</p>
                <div className='flex justify-end gap-[8px]'>
                  <DeleteModalButton title='Cancel' className='bg-[#ffff] text-[#0F172A] border border-[#e2e8f0]' onClick={closeDeleteModal} />
                  <DeleteModalButton title='Delete' className='bg-[#ef4444] text-[#ffff]' onClick={closeDeleteModal} />
                </div>
        </div>
    </main>
  )
}

export default DeleteModal;