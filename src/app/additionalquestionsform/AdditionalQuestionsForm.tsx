"use client";

import { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';

const AdditionalQuestionsForm = () => {
    const userInquiryData = {
        name: '',
        email: '',
        message: ''
    };

    const [formData, setFormData] = useState(userInquiryData);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const clearErrorMessage = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setErrors({ ...errors, [name]: '' });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email: string) => {
      const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailCheck.test(email);
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};
        
        const { name, email, message } = formData;

        if (!name) errors.name = 'Name is required';
        if (!email) {
            errors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            errors.email = 'Email is invalid';
        }
        if (!message) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const response = await fetch('/api/submit-question', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    setSuccessMessage('Your question has been submitted successfully.');
                    setErrorMessage('');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                setErrorMessage('There was an error submitting your question. Please try again.');
                setSuccessMessage('');
                setFormData({ name: '', email: '', message: '' });
            }
        }
    };

    return (
        <div className='flex flex-col gap-[28px] md:gap-[4.125rem] mt-[2.75rem] mb-[11.375rem] md:mb-[4rem] max-w-[676px] w-full'>
            <div className='text-center items-center flex flex-col gap-[.9375rem] md:gap-[9px]'>
                <h3 className='leading-[33.89px] font-[700] text-[1.25rem] md:text-[1.75rem] text-[#F97316]'>Still have questions?</h3>
                <p className='text-[#525252] text-[1rem] md:text-[1.125rem] leading-[1.3613rem] font-[400]'>Fill the form and enter your message</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-[27px] md:gap-[1.5rem] w-full' noValidate>
                <div className='flex flex-col gap-[8px] md:gap-[.75rem]'>
                    <label 
                    htmlFor="email" 
                    className=' text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]'
                    >
                    Email:</label>
                    <input
                        onFocus={clearErrorMessage}
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        
                        placeholder='Enter email address'
                        className=' w-full rounded-md border-[1px] border-[#B2B0B0] bg-background py-[.75rem] md:py-[1.25rem] px-[1rem] md:px-0 md:pl-[1rem] md:pr-[1.5rem] font-[400] leading-[1.35rem] text-foreground outline-none placeholder:text-[.875rem] md:placeholder:text-[18px]'
                        />
                    {errors.email && <span className='text-red-600'>{errors.email}</span>}
                </div>
                <div className='flex flex-col gap-[8px] md:gap-[.75rem]'>
                    <label 
                    htmlFor="name" 
                   className=' text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]'
                    >Name:</label>
                    <input
                        id="name"
                        onFocus={clearErrorMessage}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter full name'
                        className=' w-full rounded-md border-[1px] border-[#B2B0B0] bg-[]  py-[.75rem] md:py-[1.25rem] px-[1rem] md:px-0 md:pl-[1rem] md:pr-[1.5rem] font-[400] leading-[1.35rem] text-foreground outline-none placeholder:text-[.875rem] md:placeholder:text-[18px]'
                        />
                    {errors.name && <span className='text-red-600'>{errors.name}</span>}
                </div>
                <div className='flex flex-col gap-[8px] md:gap-[.75rem]'>
                    <label 
                    htmlFor="message" 
                    className=' text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]'>
                      Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        onFocus={clearErrorMessage}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Message...'
                        className=' h-[12.75rem] w-full rounded-md border-[1px] border-[#B2B2B2] pb-[7rem] pl-[1rem] pr-[10px] pt-[10px] text-[.8125rem] outline-none md:text-[1.125rem]'
                        />
                    {errors.message && <span className='text-red-600'>{errors.message}</span>}
                </div>
                <button type="submit" className='mt-[1.75rem] h-[3.75rem] w-full rounded-md  bg-[#F97316]  px-4 py-2 text-[1rem] font-[400] leading-[1.3613rem] text-white md:mt-[5.1875rem] md:text-[1.125rem]
                '>Submit</button>
                {successMessage && <div className='text-green-600'>{successMessage}</div>}
                {errorMessage && <div className='text-red-600'>{errorMessage}</div>}
            </form>
        </div>
    );
};


export default AdditionalQuestionsForm;
