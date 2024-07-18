import React from 'react'
import Button from '~/components/common/Button'

const Join = () => {
  return (
   
          <div className='w-[948px] h-[185px] flex flex-col mx-auto justify-between items-center mb-[80px]'>
              <h3 className='text-[#525252] text-[44px] font-[600] text-center'>Join Our Team</h3>
              <p className='text-[18px] leading-[22px] text-center text-[#525252] w-[729px]'>Interested in joining out team? View our Job Listing page for openings and apply with 
                  an equal chance of working with us!</p>
              <Button title='Join us' className='bg-about-btn p-[16px_8px] w-[80px] h-[40px] rounded-[6px] flex items-center justify-center text-[#fff]'/>
          </div>
    
  )
}

export default Join