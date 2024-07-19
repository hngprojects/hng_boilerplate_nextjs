
"use client"
// components/ContactForm.tsx
import React, { useState } from 'react';
import InputField from './inputfield';
import axios from 'axios';
import naver from 'next-auth/providers/naver';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<string | null>(null);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await axios.post('https://your-backend-api.com/submit', formData);
      setStatus('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      naver
      setStatus('Failed to submit the form. Please try again.');
    }
  };

  const inputFields = [
    { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter full name', required: true },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter email address', required: true },
    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter phone number', required: false }
  ];

  return (
    <div className="w-full max-w-[80%] mx-auto p-8 ">
      <form onSubmit={handleSubmit} className="rounded px-8 pt-6 pb-8 mb-4 bg-[#FAFAFA]">
        {inputFields.map((field) => (
          <InputField
            key={field.name}
            value={formData[field.name as keyof FormData]}
            type={field.type}
            onChange={handleChange}
            placeholder={field.placeholder}
            id={field.name}
            name={field.name}
            label={field.label}
          />
        ))}
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm mb-2 ">Message</label>
          <input
            id="message"
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 pb-[112px] bg-[#FAFAFA] leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-[#F97316]  text-white py-3 px-4 w-full gap-2 flex items-center justify-center rounded focus:outline-none focus:shadow-outline text-[0.65rem] font-normal"
        >
        <img src='/mail.svg' alt="mail" />
          Send
        </button>
        {status && <p className={`text-xs italic ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;

