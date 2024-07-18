import React from 'react'
import Button from '~/components/common/Button'

const OurServices = () => {
  return (
      <div className='w-[1200px] h-[225px] mt-[80px] grid grid-cols-2  mx-auto'>
          <div className='w-[486px] h-full flex flex-col justify-between'>
              <h3 className='text-[28px] text-[#F97316] font-[700]'>Our Services</h3>
              <p className='text-[44px] font-[600] text-[#525252] leading-[53px]'>Trained to Give You The Best</p>
              <Button title='Contact Us' className='w-[107px] p-[8px_16px] rounded-lg bg-[#F97316] text-[#fff] text-[14px]'/>
          </div>

          <div className='flex items-center'>
              <p className='text-[#525252] text-[18px] leading-[22px]'>Since our founding in, Hng Boilerplate has been dedicated to  constantly evolving to stay ahead of the curve. Our agile mindset and relentless pursuit of innovation ensure that you're always equipped with the most effective tools and strategies. </p>
          </div>
    </div>
  )
}

export default OurServices