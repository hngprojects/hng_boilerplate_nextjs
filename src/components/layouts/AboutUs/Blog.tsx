import React from 'react'

const Blog = () => {
  return (
      <div className='w-[1200px] h-[116px] bg-[#f974162a] mx-auto flex gap-[120px] mt-[108px] p-[8px_16px] rounded-2xl'>
          <div className='w-[205px] flex flex-col items-center text-about-btn'>
              <h2 className='text-[48px] font-[700]'>10 years</h2>
              <p className='text-[18px] font-[500]'>In Business</p>
          </div>
          <div className='w-[205px] flex flex-col items-center text-about-btn'>
              <h2 className='text-[48px] font-[700]'>75,000+</h2>
              <p className='text-[18px] font-[500]'>Customer</p>
          </div>
          <div className='w-[205px] flex flex-col items-center text-about-btn'>
              <h2 className='text-[48px] font-[700]'>100k+</h2>
              <p className='text-[18px] font-[500]'>Monthly Blog Readers</p>
          </div>
          <div className='w-[205px] flex flex-col items-center text-about-btn'>
              <h2 className='text-[48px] font-[700]'>1.2m+</h2>
              <p className='text-[18px] font-[500]'>Social Follower</p>
          </div>
    </div>
  )
}

export default Blog