/* eslint-disable no-console */

/* eslint-disable prettier/prettier */
"use client"

import CheckoutForm from '../_components/checkoutForm/checkoutForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);



const Page = () => {
console.log('checkout')
    return (
        <div className='px-[30px]'>
            <div className='flex flex-col gap-y-[16px]'>
                <div className='flex items-center gap-x-[10px]'>
                    <Link href={'/dashboard/admin/settings/payment-information'}>
                        <ArrowLeft />
                    </Link>
                    <p className='text-[24px] font-semibold px-[14px]'>Upgrade to Basic</p>
                </div>
                <p className='text-[14px] text-neutral-dark-2'>Do more with unlimited users and Integration when you upgrade</p>
            </div>
            <CheckoutForm plan={undefined} />
        </div>
    )
}

export default Page
