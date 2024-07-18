import React from 'react'

const CoreValues = () => {
  return (
      <div className='flex flex-col items-center justify-center mt-[80px]'>
          <div className='w-[500px] flex flex-col items-center'>
              <h3 className='text-[#525252] text-[44px] font-[600]'>Our Core Values</h3>
              <p className='text-[18px] leading-[22px] text-center text-[#525252] '>Our Value shapes the core of our organization, and defines the character of our industry</p>
          </div>

          <div className='grid grid-cols-2 w-[1200px] h-[424px] gap-[24px] mt-[40px]'>
              <div className='flex flex-col w-[588px] h-[200px] rounded-[10px] p-[16px] gap-[24px] bg-[#f974162a]'>
                  <h3 className='text-[28px] text-about-btn font-[700] text-center'>Integrity</h3>
                  <p className='text-[18px] leading-[22px] text-[#525252]font-[400]'>We uphold the highest ethical standards in everything we do, fostering trust and transparency with our clients, partners, and employees. We believe that honesty and integrity are the foundation of lasting success.</p>
              </div>
              <div className='flex flex-col w-[588px] h-[200px] rounded-[10px] p-[16px] gap-[24px] bg-[#f974162a]'>
                  <h3 className='text-[28px] text-about-btn font-[700] text-center'>Customer Centricity</h3>
                  <p className='text-[18px] leading-[22px] text-[#525252]font-[400]'>Our customers are at the heart of our business. We strive to understand their needs, exceed their expectations, and build lasting relationships based on trust and mutual respect. We believe that putting our customers first is the key to long-term success.</p>
              </div>
              <div className='flex flex-col w-[588px] h-[200px] rounded-[10px] p-[16px] gap-[24px] bg-[#f974162a]'>
                  <h3 className='text-[28px] text-about-btn font-[700] text-center'>Innovation</h3>
                  <p className='text-[18px] leading-[22px] text-[#525252]font-[400]'>We embrace a culture of continuous improvement and creativity, constantly seeking new ways to evolve and enhance our products, services, and processes. We encourage experimentation and risk-taking, recognizing that innovation is essential for growth.</p>
              </div>
              <div className='flex flex-col w-[588px] h-[200px] rounded-[10px] p-[16px] gap-[24px] bg-[#f974162a]'>
                  <h3 className='text-[28px] text-about-btn font-[700] text-center'>Excellence</h3>
                  <p className='text-[18px] leading-[22px] text-[#525252]font-[400]'>We are committed to delivering exceptional quality in everything we do, from our products and services to our customer interactions and internal processes. We strive for continuous improvement and hold ourselves to the highest standards of performance.</p>
              </div>
          </div>
    </div>
  )
}

export default CoreValues