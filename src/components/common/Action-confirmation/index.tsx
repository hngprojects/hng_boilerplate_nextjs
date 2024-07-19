import Image from "next/image"
import { Button } from "../../ui/button"


type ModalProps = {
    heading: string,
    description: string,
    close: () => void,
    cancel: () => void,
    confirm: () => void,
    variant: "Basic information" | "Confirmation" | "Destructive confirmation" | "Success" | "Error",
}

const Modal = ({ heading, description, close, cancel, confirm, variant }: ModalProps) => {
    if (variant === "Basic information") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 flex flex-col gap-y-4 max-w-[21.4375rem] md:max-w-[30rem]">
                <div className="flex gap-x-2 items-start justify-between w-full">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A]">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569]">{description}</p>
                    </div>
                    <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} onClick={close} className="hover:cursor-pointer hover:bg-slate-100 rounded-md" />
                </div>
                <Button onClick={cancel}>Close</Button>
            </div>
        )
    } else if (variant === "Confirmation") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 pb-4 flex flex-col gap-y-4 max-w-[21.4375rem] md:max-w-[30rem]">
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A]">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569]">{description}</p>
                    </div>
                    <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} onClick={close} className="hover:cursor-pointer hover:bg-slate-100 rounded-md" />
                </div>
                <div className="flex flex-col gap-y-1 md:flex-row-reverse md:items-center md:justify-between">
                    <Button className="md:w-[18.8125rem]" onClick={confirm}>Yes, I want to continue</Button>
                    <Button variant="ghost" className="text-[#525252]" onClick={cancel}>No, thanks</Button>
                </div>
            </div>
        )
    } else if (variant === "Destructive confirmation") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 pb-4 flex flex-col gap-y-4 max-w-[21.4375rem] md:max-w-[30rem]">
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A]">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569]">{description}</p>
                    </div>
                    <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} onClick={close} className="hover:cursor-pointer hover:bg-slate-100 rounded-md" />
                </div>
                <div className="flex flex-col gap-y-2 md:flex-row-reverse md:items-center md:justify-between">
                <Button variant="destructive" className="md:w-[18.8125rem]" onClick={confirm}>Yes, cancel subscription</Button>
                <Button variant="ghost" className="text-[#525252]" onClick={cancel}>No, thanks</Button>
                </div>
            </div>
        )
    } else if (variant === "Success") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 pt-[2.75rem] flex flex-col items-center gap-y-4 relative max-w-[21.4375rem] md:max-w-[26.5rem]">
                <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} className="w-6 h-6 absolute top-[2.75rem] right-6 hover:cursor-pointer hover:bg-slate-100 rounded-md" onClick={close} />
                <Image src="/success-modal-icon.svg" alt="success" width={48} height={48} className="w-12 h-12" />
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A] text-center">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569] text-center">{description}</p>
                    </div>
                </div>
                <Button className="w-full" onClick={confirm}>Continue</Button>
            </div>
        )
    } else if (variant === "Error") {
        return (
            <div className="bg-[#FAFAFA] rounded-[1.25rem] border border-[#CBD5E1] p-6 pt-[2.75rem] flex flex-col items-center gap-y-4 relative max-w-[21.4375rem] md:max-w-[26.5rem]">
                <Image src="/close-modal-icon.svg" alt="close" width={24} height={24} className="w-6 h-6 absolute top-[2.75rem] right-6 hover:cursor-pointer hover:bg-slate-100 rounded-md" onClick={close} />
                <Image src="/error-modal-icon.svg" alt="success" width={48} height={48} className="w-12 h-12" />
                <div className="flex gap-x-2 items-start">
                    <div className="flex flex-col gap-y-2">
                        <h6 className="font-semibold text-lg leading-[1.36125rem] text-[#0A0A0A] text-center">{heading}</h6>
                        <p className="text-sm leading-[1.05875rem] text-[#475569] text-center">{description}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:flex-row-reverse w-full">
                    <Button className="w-full" onClick={confirm}>Try again</Button>
                    <Button variant="ghost" className="text-[#525252] w-full bg-white border border-[#E2E8F0]" onClick={cancel}>No, thanks</Button>
                </div>
            </div>
        )
    }
}

export default Modal