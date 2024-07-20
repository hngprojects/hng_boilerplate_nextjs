import Image from "next/image";
import logo from '../../public/logo.png'
// import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer border relative w-full bottom-0'>
        {/* above the dividing line */}
        <div className='text-black bg-footer-gray p-10'>
           <h1 className="font-bold text-center lg:hidden">BoilerPlate</h1>
           <p className="text-center mb-10 lg:hidden">Logo details subject and address</p>

           <h1 className="font-bold text-center mb-2 lg:hidden">Sign Up For Newsletter</h1>
           <form action="" className="flex text-sm border border-grey-400 rounded-md mb-20 lg:hidden">
                <input type="text" className="w-full p-3" placeholder="Enter Email" />
                <button className="text-white font-normal rounded-md p-3 border border-[#F97316] bg-[#F97316]">Subscribe</button>
           </form>

           <div className="lg:flex">
                <div className="block mr-6">
                    <h1 className="font-bold mb-2">BoilerPlate</h1>
                    <p className="mb-10">Logo details subject and address</p>
                </div>

                <div className="flex mb-9">
                    <div className='1 mr-6 w-[50%]'>
                        <p className='font-bold text-normal mb-3'>Navigation</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Home</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>About Us</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Career</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Feature Updates</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Blog</p>
                    </div>
                    <div className='2 w-[50%]'>
                        <p className='font-bold text-normal mb-3'>Support</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Help Center</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>FAQ</p>
                        <p className='font-nromal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Waiting List</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Pricing Experience</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Contact us</p>
                    </div>
                </div>

                <div className="flex">
                    <div className='3 mr-6 w-[50%]'>
                        <p className='font-bold text-normal mb-3'>Legal</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Privacy Policy</p>
                        <p className='font-normal text-normal mb-2 hover:text-hero-blue ease-in-out duration-300 cursor-pointer'>Terms and Conditions</p>
                    </div>
                    <div className='4 w-[50%]'>
                        <p className='font-bold text-normal mb-3 lg:hidden'>Follow Us</p>
                    </div>
                </div>

                <div className="sm:hidden">
                    <h1 className="font-bold text-center mb-2">Sign Up For Newsletter</h1>
                    <form action="" className="flex text-sm border border-grey-400 rounded-md mb-20">
                            <input type="text" className="w-full p-3" placeholder="Enter Email" />
                            <button className="text-white font-normal rounded-md p-3 border border-[#F97316] bg-[#F97316]">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

        <hr />
        {/* copyright section below the dividing line */}
        <div className='flex items-center bg-white px-10 py-3'>
            <p className='text-xs text-center text-black w-[100%] '>© 2024 All Rights Reserved</p>
        </div>
    </div>
  )
}