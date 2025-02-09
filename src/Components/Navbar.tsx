import React from "react";
import Button from "../view/Button";

const Navbar: React.FC = () => {
const [isOpen, setIsOpen] = React.useState(false)



    return (
        <div className="flex w-full z-50 fixed justify-center">   
        <div className="flex w-6xl  xl:fixed text-black justify-between items-center px-4 py-2 h-16 bg-transparent ">

            {/* Hamburger */}
            <div className="md:hidden z-50 absolute top-4 right-4">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2">
               <img src="/public/vite.svg" className="h-8 w-8" alt="" /> 
               <p>Lorem</p>
            </div>
            {/* Navigation */}
            <div className="hidden md:flex">
                <ul className="flex gap-4 ml-24">
                    <li className="hover:text-fuchsia-400 cursor-pointer ">Courses</li>
                    
                    <li className="hover:text-fuchsia-400 cursor-pointer ">Offers</li>
                    <li className="hover:text-fuchsia-400 cursor-pointer ">Contact</li>
                </ul>
            </div>

            {/* Button */}
            <div className=" gap-4 hidden md:flex">
               <Button>Sign in</Button>
               <Button>Free Trial</Button>
            </div>




            {/* Mobile Navigation */}
            <div className="md:hidden w-full fixed  top-14 right-8 h-20 fle flex-col text-end items-center ">
                {isOpen &&   (
                    <ul className="flex flex-col gap-4">
                        <li className="hover:text-fuchsia-400 cursor-pointer ">Courses</li>
                        <li className="hover:text-fuchsia-400 cursor-pointer ">Teachers</li>
                        <li className="hover:text-fuchsia-400 cursor-pointer ">Offers</li>
                        <li className="hover:text-fuchsia-400 cursor-pointer ">Contact</li>
                    </ul>
                )}
                {isOpen && (
                    <div className="flex mt-2 gap-5 flex-col ">
                        <Button variant="text-sm">Sign in</Button>
                        <Button variant="text-sm">Free Trial</Button>
                    </div>
                )}
            </div>


        </div>
        </div>
    )
}

export default Navbar