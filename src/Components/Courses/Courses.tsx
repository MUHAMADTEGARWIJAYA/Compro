import React from "react";
import Button from "../../view/Button";
import { IoIosSearch } from "react-icons/io";

 const Courses: React.FC =() =>{
    return(
        <div className="mt-44">
            {/* Header */}
            <div className="  mt-20 bg-[#fcf4fc] ">
                <h1 className="text-xl font-bold text-center">Search For Courses</h1>
                <div className="flex justify-center items-center gap-4 mt-5">
                  <div className="relative">
                    <IoIosSearch className="absolute text-2xl left-3 top-1/2 transform -translate-y-1/2 text-fuchsia-400" />
                    <input
                        type="text"
                        placeholder="Search For Courses"
                        className="pl-10 pr-4 py-2 rounded-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    />
                    </div>
                    <Button>Search</Button>
                </div>
            </div>

            {/* Content  */}
            <div className={`w-full min-h-fit mt-20 text-slate-800 bg-[#fcf4fc] flex-col xl:gap-6 flex xl:flex-row justify-center items-center`}>
                {/* Image Right */}
                <div className="w-100 xl:w-160 h-fit flex justify-center  items-center px-4  ">
                    <div >
                    <img src="/public/Krem Hijau Minimalis Best Moment Foto Kolase (1).png"  className={`w-130 bg-black   object-cover`}/>
                    </div>
                </div>
                
                {/* Left Text */}
                <div className="xl:w-xl w-full flex px-10 mt-20 xl:mt-0 items-center ">
                    <div className="w-md space-y-10">
                        <h1 className={`text-3xl font-bold`}> <span className="text-[#D257F9]">Benefit</span> From Our Online Learning</h1>
                        <div className="flex gap-7">
                        <div className="flex gap-10 flex-col">
                            <img src="/public/graduation-cap-svgrepo-com.svg" alt="" className="w-12 h-12 rounded-full bg-[#D257F9] object-cover py-2 px-2" />
                            <img src="/public/book-open-svgrepo-com (1).svg" alt="" className="w-12 h-12 rounded-full bg-[#FF809C] object-cover py-2 px-2"/>
                            <img src="/public/person-svgrepo-com.svg" alt="" className="w-12 h-12 rounded-full bg-[#D257F9] object-cover py-2 px-2" />
                            <div className="w-12 h-12 rounded-full bg-[#FF809C] object-cover py-2 px-2">
                            <img src="/public/play-1003-svgrepo-com.svg" alt="" className=" bg-[#FF809C] object-center py-2 px-2" />
                            </div>
                        </div>

                        <div className="flex gap-7 xl:gap-12 flex-col">
                            <div>
                                <h1>Online Degrees</h1>
                                <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.</p>
                            </div>

                            <div>
                                <h1>Short Courses</h1>
                                 <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.</p>
                            </div>

                            <div>
                                 <h1>Training From A Professional</h1>
                                 <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.</p>
                            </div>

                            <div>
                                 <h1>Video Learning</h1>
                                 <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.</p>
                            </div>

                        </div>
                        
                        </div>
                        <Button> Enroll Now  </Button>
                    </div>
                </div>
                </div>
        </div>
    )
 }

 export default Courses