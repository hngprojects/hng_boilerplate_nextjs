import Image from "next/image"

type ModalProps = {
    heading: string,
    description: string,
    close: () => void,
    cancel: () => void,
    confirm: () => void,
    variant: "Basic information" | "Confirmation" | "Destructive confirmation" | "Success" | "Error",
    displayModal: boolean // This determines the open/close state of the modal and should be managed in the open function to open the modal and also in the close, cancel and confirm functions passed as props. If false, the modal will not be displayed
}

const Modal = ({ heading, description, close, cancel, confirm, variant, displayModal }: ModalProps) => {
    if (displayModal === false) return
    if (variant === "Basic information") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 flex flex-col gap-y-4 max-w-[21.4375rem] md:max-w-[30rem]">
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A]">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569]">{description}</p>
                    </div>
                    <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} onClick={close} />
                </div>
                <div className="bg-[#0F172A] py-2 px-4 rounded-[0.375rem] h-10 font-medium text-sm leading-6 text-white text-center hover:cursor-pointer hover:opacity-80 duration-100" onClick={cancel}>Close</div>
            </div>
        )
    } else if (variant === "Confirmation") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 flex flex-col gap-y-4 max-w-[21.4375rem] md:max-w-[30rem]">
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A]">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569]">{description}</p>
                    </div>
                    <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} onClick={close} />
                </div>
                <div className="flex flex-col gap-y-4 md:flex-row-reverse md:items-center md:justify-between">
                    <div className="bg-[#0F172A] py-2 px-4 rounded-[0.375rem] h-10 font-medium text-sm leading-6 text-white text-center md:w-[18.8125rem] hover:cursor-pointer hover:opacity-80 duration-100" onClick={confirm}>Yes, I want to continue</div>
                    <p className="font-medium leading-[1.2rem] text-[#525252] text-center hover:cursor-pointer hover:opacity-80 duration-100" onClick={cancel}>No, thanks</p>
                </div>
            </div>
        )
    } else if (variant === "Destructive confirmation") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 flex flex-col gap-y-4 max-w-[21.4375rem] md:max-w-[30rem]">
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A]">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569]">{description}</p>
                    </div>
                    <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} onClick={close} />
                </div>
                <div className="flex flex-col gap-y-4 md:flex-row-reverse md:items-center md:justify-between">
                    <div className="bg-[#EF4444] py-2 px-4 rounded-[0.375rem] h-10 font-medium text-sm leading-6 text-white text-center md:w-[18.8125rem] hover:cursor-pointer hover:opacity-80 duration-100" onClick={confirm}>Yes, cancel subscription</div>
                    <p className="font-medium leading-[1.2rem] text-[#525252] text-center hover:cursor-pointer hover:opacity-80 duration-100" onClick={cancel}>No, thanks</p>
                </div>
            </div>
        )
    } else if (variant === "Success") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 pt-[2.75rem] flex flex-col items-center gap-y-4 relative max-w-[21.4375rem] md:max-w-[26.5rem]">
                <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} className="w-6 h-6 absolute top-[2.75rem] right-6" onClick={close} />
                <Image src="/success-modal-icon.svg" alt="success" width={48} height={48} className="w-12 h-12" />
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A] text-center">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569] text-center">{description}</p>
                    </div>
                </div>
                <div className="bg-[#0F172A] py-2 px-4 rounded-[0.375rem] h-10 font-medium text-sm leading-6 text-white text-center w-full hover:cursor-pointer hover:opacity-80 duration-100" onClick={confirm}>Continue</div>
            </div>
        )
    } else if (variant === "Error") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 pt-[2.75rem] flex flex-col items-center gap-y-4 relative max-w-[21.4375rem] md:max-w-[26.5rem]">
                <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} className="w-6 h-6 absolute top-[2.75rem] right-6" onClick={close} />
                <Image src="/error-modal-icon.svg" alt="success" width={48} height={48} className="w-12 h-12" />
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A] text-center">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569] text-center">{description}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:flex-row-reverse w-full">
                    <div className="bg-[#0F172A] py-2 px-4 rounded-[0.375rem] h-10 font-medium text-sm leading-6 text-white text-center w-full hover:cursor-pointer hover:opacity-80 duration-100" onClick={confirm}>Try again</div>
                    <p className="bg-white text-[#0F172A] border border-[#E2E8F0] py-2 px-4 rounded-[0.375rem] h-10 font-medium text-sm leading-6 text-center w-full hover:cursor-pointer hover:opacity-80 duration-100" onClick={cancel}>No, thanks</p>
                </div>
            </div>
        )
    }
}

export default Modal