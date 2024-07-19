"use client"
import { useState } from "react"
import Button from "~/components/common/Button"

const CookieFooter: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)
    const handleCloseFooter = () => {
        setIsOpen(false)
    }

    if (!isOpen) return null
    return (
        <footer className="fixed text-start bottom-0 z-50 text-[#525252] md:text-black bg-zinc-50 w-[100vw] left-0 right-0">
            <div className=" max-w-[1200px] mx-auto lg:justify-center flex flex-col lg:flex-row gap-y-4 px-6 py-5 md:py-10 xl:px-0  gap-x-[25px] ">
                <p className="font-bold md:font-semibold lg:max-w-[693px] text-sm leading-normal md:text-xl flex gap-y-2 flex-col">We Value your Privacy <span className="text-xs md:text-base font-normal">
                    Our website uses cookies to enhance your browsing experience, provide personalized content, and analyze site traffic. By clicking "Accept All", you consent to our use of cookies.
                </span>
                </p>
                <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 items-end">
                    <Button type="primary" text="accept all cookies" onClick={handleCloseFooter} className="lg:order-3" />
                    <Button type="primary" text="reject all" onClick={handleCloseFooter} className="lg:order-2" />
                    <Button type="secondary" text="cookie settings" className="lg:order-1" />
                </div>
            </div>
        </footer>
    )
}

export default CookieFooter
