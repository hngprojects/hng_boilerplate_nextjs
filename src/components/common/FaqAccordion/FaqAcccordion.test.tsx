import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import FaqAccordion from '.'
import { FAQACCORDION } from './types'

const faqs: FAQACCORDION[] = [
    {
        question: "What is the purpose of this application?",
        content: "This application is designed to help users manage their tasks efficiently by providing tools for scheduling, tracking progress, and setting reminders."
    },
    {
        question: "How do I reset my password?",
        content: "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions to receive a password reset email and create a new password."
    },
    {
        question: "Can I use this application on multiple devices?",
        content: "Yes, the application is accessible from multiple devices including desktops, tablets, and smartphones. Your data will be synced across all devices, ensuring a seamless experience."
    }
]

describe('FaqAccordion', () => {
    it('renders correctly with given FAQ data', () => {
        render(<FaqAccordion faqs={faqs} />)

        // Check if the questions are rendered
        faqs.forEach(faq => {
            expect(screen.getByText(faq.question)).toBeInTheDocument()
        })
    })

    it('collapses and expands content when triggers are clicked', async () => {
        render(<FaqAccordion faqs={faqs} />)

        // Get all the triggers
        const triggers = screen.getAllByText(/What is the purpose|How do I reset|Can I use/)

        // Click each trigger and check if content is displayed
        for (let i = 0; i < triggers.length; i++) {
            await userEvent.click(triggers[i])
            expect(screen.getByText(faqs[i].content)).toBeInTheDocument()

            // Click again to collapse
            await userEvent.click(triggers[i])
            expect(screen.queryByText(faqs[i].content)).not.toBeInTheDocument()
        }
    })

    it('renders correctly for different screen sizes', () => {
        render(<FaqAccordion faqs={faqs} containerClassName="p-6 bg-neutral-50 w-full md:w-96 rounded-xl" />)

        // Check if the container class includes responsive width
        const container = screen.getByRole('region')
        expect(container).toHaveClass('w-full')
        expect(container).toHaveClass('md:max-w-96')
    })
})
