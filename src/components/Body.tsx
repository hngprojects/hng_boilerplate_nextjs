'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { mainBlog } from '../data/data'

interface Blog{
    id: number,
    occupation: string,
    header: string,
    date: string,
    readTime: string,
    description: string
}

interface MainBlog{
    blogs: Blog[]
}

export const Body = () => {
    console.log(mainBlog)
    const [ visible, setVisible ] = useState(5)
    const [ loading, setLoading ] = useState(false)
    const showMoreItem = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setVisible((prevValue) => prevValue + 2)
        }, 2000)
    }
  return (
    <div className='flex flex-col gap-[24px]'>
        <h1 className='text-[#525252] text-[28px] font-bold md:text-center'
        data-testid="required-latest-articles"
        >Latest Articles</h1>
        <div className='flex flex-col items-start gap-[24px] mb-3 md:w-[70%] md:mx-auto'>
            {
                mainBlog.slice(0, visible).map(blog=> {
                    return(
                        <div key={blog.id} className='flex flex-col md:flex-row md:gap-[24px] md:p-[24px] justify-center items-start border-b border-[#525252]' data-testid="card-list">
                            <div className=''>
                                <span className='px-[12px] py-[4px] text-[12px] font-bold text-center left-2 bg-[#F97316] rounded-[16px] text-[#525252]'>{blog.occupation}</span>
                                <h1 className='text-[20px] font-bold leading-normal'>{blog.header}</h1>
                                <p className='text-[14px] font-normal leading-normal'>{blog.description}</p>
                                <div className='flex items-center gap-[6px]'>
                                    <img width={24}  src={blog.accountImgMobile.src} alt='image'/>
                                    <p className='text-[14px] font-medium leading-normal'>{blog.name}</p>
                                    <p className='text-[14px] font-normal leading-normal'>{blog.readTime}</p>
                                    <p className='text-[14px] font-normal leading-normal'>{blog.date}</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <img src={blog.image.src} alt='picture'></img>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <button
        data-testid='buttontestid'
        onClick={showMoreItem} className="w-full md:w-[20%] lg:w-[11%] md:mx-auto bg-[#F97316] rounded-md text-center text-[14px] font-medium text-primary-foreground py-[9px] leading-[25px]">{loading ? 'LOADING' : "Load More"}</button>
    </div>
  )
}
