
import Image from 'next/image'
import React from 'react'

const ExecutiveTeam = () => {
  return (
      <div className='w-full h-[610px] border-2 mt-[80px] flex flex-col'>
          <div className='w-[630px] flex flex-col mx-auto'>
              <h3 className='text-[#525252] text-[44px] font-[600] text-center'>The Executive Team</h3>
              <p className='text-[18px] leading-[22px] text-center text-[#525252] '>Meet Our Exclusive team that have been trained to meet your needs.</p>
          </div>
          <div className='grid grid-cols-4 w-[1200px] h-[3px] mt-[20px] mx-auto gap-[27px]'>
              <div className='border flex flex-col  pb-[14px] gap-[20px]'>
                  <Image src='' alt='image' className='h-[205px] w-[full]'/> 
                  <div className='h-[105px] flex flex-col justify-between p-[0px_14px]'>
                  <div className='h-[41px]'>     
                  <h3 className='text-[18px] font-[600]'>John Abraham</h3>
                  <p className='text-[#525252] text-[12px] font-[400]'>Business Developer</p>
                  </div>
                  <p className='text-[#525252] w-[249px] text-[16px] leading-[19px]'>John is a strategic product manager with a keen eye for market trends. </p>
                  </div>
                  <div className='w-[126px] border h-[32px] gap-[14px] ml-[14px]'>
                      
                  </div>
              </div>
              <div className='border flex flex-col  pb-[14px] gap-[20px]'>
                  <Image src='' alt='image' className='h-[205px] w-[full]'/> 
                  <div className='h-[105px] flex flex-col justify-between p-[0px_14px]'>
                  <div className='h-[41px]'>     
                  <h3 className='text-[18px] font-[600]'>Addison mark</h3>
                  <p className='text-[#525252] text-[12px] font-[400]'>Software Engineer</p>
                  </div>
                  <p className='text-[#525252] w-[249px] text-[16px] leading-[19px]'>Addison our skilled frontend developer, brings websites to life with clean code. </p>
                  </div>
                  <div className='w-[126px] border h-[32px] gap-[14px] ml-[14px]'>
                      
                  </div>
              </div>
              <div className='border flex flex-col  pb-[14px] gap-[20px]'>
                  <Image src='' alt='image' className='h-[205px] w-[full]'/> 
                  <div className='h-[105px] flex flex-col justify-between p-[0px_14px]'>
                  <div className='h-[41px]'>     
                  <h3 className='text-[18px] font-[600]'>Joy Tony</h3>
                  <p className='text-[#525252] text-[12px] font-[400]'>Product Manager</p>
                  </div>
                  <p className='text-[#525252] w-[249px] text-[16px] leading-[19px]'>Joy is a passionate product manager driven by user experience.</p>
                  </div>
                  <div className='w-[126px] border h-[32px] gap-[14px] ml-[14px]'>
                      
                  </div>
              </div>
              <div className='border flex flex-col  pb-[14px] gap-[20px]'>
                  <Image src='' alt='image' className='h-[205px] w-[full]'/> 
                  <div className='h-[105px] flex flex-col justify-between p-[0px_14px]'>
                  <div className='h-[41px]'>     
                  <h3 className='text-[18px] font-[600]'>Johua Philip</h3>
                  <p className='text-[#525252] text-[12px] font-[400]'>Data Analyst</p>
                  </div>
                  <p className='text-[#525252] w-[249px] text-[16px] leading-[19px]'>JJoshua, our data analyst, uses user data to optimize our boilerplates for performance.</p>
                  </div>
                  <div className='w-[126px] border h-[32px] gap-[14px] ml-[14px]'>
                      
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ExecutiveTeam