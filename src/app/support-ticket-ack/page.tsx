'use client'
import { Body, Button, Container, Heading, Html, Img, Link, Section, Text } from '@react-email/components';
import Image from 'next/image';
import logo from 'public/Logo.svg'


export interface EmailProps {
   title: string;
   image: string;
   name: string;
   supportTicketId: string;
   subject: string;
   description: string;
   priority: string;
   status: string;
   supportTicketLink: string;
 }


 const EmailTemplate: React.FC<EmailProps> = ({
   title,
   image,
   name,
   supportTicketId,
   subject,
   description,
   priority,
   status,
   supportTicketLink
 }) => {
   return(
      <div lang="en" >
         <div className='m-auto max-w-[1440px] bg-white font-sans'>
            <div>
               <div className='bg-[#E1D6D666] flex gap-[10px] p-[56px] items-center justify-center'>
                  <Image src='/Logo.svg' width={18} height={18} alt='logo'/>
                  <Heading className='text-[24px] font-semibold'>Boilerplate.</Heading>
               </div>

               <div className='flex flex-col gap-6 py-[48px] px-[36px] sm:p-[56px] '>
                  <div className='flex justify-center'>
                     <Image src='/customerRep.png' width={286} height={286} alt='customerRep'/>
                  </div>
                  <Heading className='text-[20px] md:text-[24px] font-semibold text-center'>Your ticket has been opened</Heading>
                  <div className='flex flex-col gap-[28px] pb-2 md:gap-[32px] text-[#111111]'>
                     <div className='flex flex-col'>
                        <Text className='text-[18px] font-semibold'>Hi John Doe,</Text>
                        <Text className='text-[14px] md:text-[16px]'>Thank you for contacting our support team. A support ticket has 
                           now been opened for your request.
                        You will be notified when a response is made by email. The details 
                        of your ticket are shown below.</Text>
                        <div className='bg-[#F8FAFC] p-[28px] rounded-[8px] flex flex-col gap-4'>
                           <div data-testid="supportTicketId" className='flex gap-1 sm:gap-4  border-b-[0.5px] border-[#E2E8F0]'>
                              <Text>Ticket ID:</Text>
                              <Text className='font-[500] text-[#0A0A0A]'> <span className='text-[14px] md:text-[16px]'>BP01733</span></Text>
                           </div>
                           <div data-testid="subject" className='flex gap-1 sm:gap-4 border-b-[0.5px] border-[#E2E8F0]'>
                              <Text>Subject:</Text>
                              <Text className='font-[500] text-[#0A0A0A]'> <span className='text-[14px] md:text-[16px]'>Account Login issue</span></Text>
                           </div>
                           <div data-testid="description" className='flex gap-1 sm:gap-4 border-b-[0.5px] border-[#E2E8F0]'>
                              <Text>Description:</Text>
                              <Text className='font-[500] text-[#0A0A0A]'> <span className='text-[14px] md:text-[16px]'>I tried login into my account and have been seeing errors</span></Text>
                           </div>
                           <div data-testid="priority" className='flex gap-1 sm:gap-4 border-b-[0.5px] border-[#E2E8F0]'>
                              <Text>Priority:</Text>
                              <Text className='font-[500] text-[#E23636]'> <span className='text-[14px] md:text-[16px]'>High</span></Text>
                           </div>
                           <div data-testid="status" className='flex gap-4'>
                              <Text>Status:</Text>
                              <Text className='font-[500] text-[#4CC513E5]'> <span className='text-[14px] md:text-[16px]'>Open</span></Text>
                           </div>
         
                        </div>
                        <Text><span className='text-[14px] md:text-[16px] text-start'>You can easily review your ticket </span><Link href='#' className='underline text-[#111111]'>here</Link></Text>
                        <button className='text-center cursor-pointer'><span className='text-[#FAF8F8] inline-block bg-[#F97316] rounded-[8px] py-2 px-4 w-full sm:w-[194px]'>Learn More About Us</span></button>

                     </div>
                  </div>
                  <Heading className='font-[500] text-[14px] md:text-[16px]'>
                     <span>Regards,</span><br /><span>Boilerplate <span className='hidden md:inline'>team</span></span>
                  </Heading>
               </div>
            </div>
         </div>
    </div>
   )
 }



 export default EmailTemplate;