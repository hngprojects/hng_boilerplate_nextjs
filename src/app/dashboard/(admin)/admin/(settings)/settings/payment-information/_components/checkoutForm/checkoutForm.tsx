/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { getApiUrl } from "~/actions/getApiUrl";
import Image from "next/image";
import { Organisation } from "~/types";
import { useLocalStorage } from "~/hooks/use-local-storage";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { fetchStripeUrl } from "~/actions/payments";
import { useToast } from "~/components/ui/use-toast";
import { ChevronDown } from "lucide-react";

interface planProperties {
    id: string;
    name: string,
    price: number
}


const CheckoutForm = ({ plan }: { plan: planProperties | undefined }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        billingOption: "monthly",
        paymentMethod: "stripe",
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { toast } = useToast();

    const [userOrg] = useLocalStorage<Organisation[]>("user_org", []);

    const [currentOrgId] = useLocalStorage<string | undefined>(
        "current_orgid",
        "",
    );

    const [openModal, setOpenModal] = useState(false)
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [pricePerMonth, setPricePerMonth] = useState<number | undefined>()
    const [pricePerYear, setPricePerYear] = useState<number | undefined>()
    const [priceDesc, setPriceDesc] = useState<boolean>(false)

    useEffect(() => {

        if (plan) {
            setPricePerMonth(plan.price);
            setPricePerYear(plan.price * 10);
        }
    }, [plan, isTermsChecked, pricePerMonth, pricePerYear])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsTermsChecked(e.target.checked);
    };

    const priceDropDown = () => {
        setPriceDesc(prev => !prev)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isTermsChecked) {
            alert('Please agree to the Terms of Service and Privacy Policy before proceeding.');
            return;
        }

        try {
            const json = {
                fullname: formData.fullName,
                business_name: formData.businessName,
                organisation_id: currentOrgId,
                plan_id: plan?.id,
                billing_option: formData.billingOption
            };

            const apiUrl = await getApiUrl();
            const token = window.localStorage.getItem("token");

            const response = await axios.post(`${apiUrl}/api/v1/payment/stripe`, json,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );

            if (response.data.status === "success") {
                setIsDialogOpen(true);
            }

            if (response.data.url)
                window.location.href = response.data.url;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            return error;
            toast({
                title: "Payment error",
                description: error.response.data.message,
            });
        }
    };

    return (
        <div className='w-full md:w-[591px] mt-[34px] px-[14px]'>
            {/* Form fields for Full Name and Business Name */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-[16px]'>
                <div className='flex flex-col gap-y-[8px]'>
                    <label>Full Name</label>
                    <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className='rounded-[8px] px-[16px] border border-[#B2B0B0] py-[12px] bg-[#FFFEFE] focus:outline-none focus:border-primary'
                        placeholder='Enter Full Name'
                    />
                </div>
                <div className='flex flex-col gap-y-[8px]'>
                    <label>Business Name (Optional)</label>
                    <input
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className='rounded-[8px] px-[16px] border border-[#B2B0B0] bg-[#FFFEFE] py-[12px] focus:outline-none'
                        placeholder='Enter Business Name'
                    />
                </div>


                {/* Billing Option */}
                <div className="pt-[32px]">
                    <label>Billing Option</label>
                    <div className='flex items-center mt-[8px] space-x-[20px] p-[24px] rounded-[6px] border border-[#CBD5E1]'>
                        <input
                            type='radio'
                            name='billingOption'
                            value='monthly'
                            checked={formData.billingOption === 'monthly'}
                            onChange={handleInputChange}
                        />
                        <div className="flex flex-col gap-[4px]">
                            <p className="font-semibold">Pay monthly</p>
                            <p>{`$${pricePerMonth}/ month/member`}</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-[8px] space-x-[20px] p-[24px] rounded-[6px] border border-[#CBD5E1]'>
                        <input
                            type='radio'
                            name='billingOption'
                            value='yearly'
                            checked={formData.billingOption === 'yearly'}
                            onChange={handleInputChange}
                        />
                        <div className="flex flex-col gap-[4px]">
                            <p className="font-semibold">Pay yearly</p>
                            <p>{`$${pricePerYear}/ year/member`}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center" onClick={priceDropDown}>
                    <div>
                        <p className="text-[16px] font-[500]">{`$${pricePerMonth}`}</p>
                    </div>
                    <div className="flex items-center gap-x-[4px] py-[8px] px-[16px] text-[12px] bg-[#FAFAFA]">
                        <p>Details</p>
                        <ChevronDown />
                    </div>
                </div>
                {priceDesc && <div className={`flex flex-col text-[12px] text-[#525252] gap-y-[8px] transition ease-in-out duration-300 ${priceDesc ? 'mt-0' : '-mt-[50%]'}`}>
                    <div className="flex justify-between items-center">
                        <p>Members in your workspace</p>
                        <p>1</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>x$20/month/member</p>
                        <p>{`${pricePerMonth}`}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                        <p>Subtotal</p>
                        <p>$20</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Tax if applicable</p>
                        <p>$20</p>
                    </div>
                </div>
}

                {/* Payment Method - Stripe only */}
                <div className="pt-[32px]">
                    <label>Choose Payment Method</label>

                    {/* Credit Card Option (Disabled) */}
                    <div className='flex items-center justify-between mt-[16px] space-x-[20px] p-[24px] rounded-[6px] border border-[#CBD5E1]'>
                        <div className="flex items-center space-x-2">
                            <input
                                type='radio'
                                name='paymentMethod'
                                value='creditCard'
                                disabled // Disable this option
                            />
                            <p className="font-semibold text-gray-400">Credit Card</p>
                        </div>
                        <Image
                            src={'/images/Symbol.svg.svg'}
                            alt="symbol"
                            width={65}
                            height={40}
                        />
                    </div>

                    {/* Stripe Payment Option */}
                    <div className='flex items-center justify-between mt-[16px] space-x-[20px] p-[24px] rounded-[6px] border border-[#CBD5E1]'>
                        <div className="flex items-center space-x-2">
                            <input
                                type='radio'
                                name='paymentMethod'
                                value='stripe'
                                checked={formData.paymentMethod === 'stripe'}
                                readOnly
                            />
                            <p className="font-semibold">Stripe Payment</p>
                        </div>
                        <Image
                            src={'/images/stripe_logo.svg.svg'}
                            alt="symbol"
                            width={65}
                            height={40}
                        />
                    </div>

                    {/* PayPal Option (Disabled) */}
                    <div className='flex items-center justify-between mt-[16px] space-x-[20px] p-[24px] rounded-[6px] border border-[#CBD5E1]'>
                        <div className="flex items-center space-x-2">
                            <input
                                type='radio'
                                name='paymentMethod'
                                value='paypal'
                                disabled // Disable this option
                            />
                            <p className="font-semibold text-gray-400">PayPal Payment</p>
                        </div>
                        <Image
                            src={'/images/paypal_logo.svg.svg'}
                            alt="symbol"
                            width={153}
                            height={40}
                        />
                    </div>
                </div>

                {/* Agreement */}
                <div className="flex items-start space-x-[8px] pt-[16px] pb-[24px]">
                    <input
                        type="checkbox"
                        checked={isTermsChecked}
                        onChange={handleCheckboxChange}
                    />
                    <p className="text-[12px]">
                        By submitting this form, you confirm that you agree to our{' '}
                        <span className="text-primary">Terms of Service</span> and{' '}
                        <span className="text-primary">Privacy Policy</span>
                    </p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-full rounded-[6px] text-primary-foreground text-[14px] py-[8px] px-[49px] ${isTermsChecked ? 'bg-primary' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    disabled={!isTermsChecked} // Disable button if checkbox isn't checked
                >
                    Proceed to Payment
                </button>
            </form>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>

                </DialogTrigger>
                <DialogContent className="w-[80%] max-w-sm:rounded-[6px] sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you are done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            {/* Form fields go here */}
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            {/* Form fields go here */}
                        </div>
                    </div>
                    <DialogFooter>
                        <Link href={`/dashboard/admin/settings/payment-information/${plan?.name.toLowerCase()}`}>
                            <button className="flex justify-self-end py-[8px] px-[16px] rounded-[6px] bg-primary text-[#FFFFFF]">Done</button>
                        </Link>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default CheckoutForm;
