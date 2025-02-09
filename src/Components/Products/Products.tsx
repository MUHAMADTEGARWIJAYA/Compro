import React from "react";
import { products } from "../../data/Product";
import { IoMdPerson } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";

const ProductsPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center flex-col bg-secondary mt-44">
            <h1 className="text-white w-full text-2xl font-bold mb-6 text-center mt-10">Our Popular Courses!</h1>
            <p className="text-white w-96 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
            <div className="w-full overflow-hidden">
                {/* Wrapper untuk scroll */}
                <div className="flex w-full xl:justify-center overflow-auto space-x-6 p-4 scrollbar-hide">
                    {products.map((product) => (
                        <div key={product.id} className="w-80 flex-shrink-0 h-[460px] rounded-2xl p-4 bg-[#fcf4fc]">
                            {/* images */}
                            <div>
                                <img src={product.image} alt="" className="w-full h-56 bg-white object-cover rounded-4xl" />
                            </div>

                            {/* tipe & Rate */}
                            <div className="flex justify-between mt-4 text-center items-center">
                                <p className="bg-[#d357f92f] w-28 text-black rounded-md"><span className="text-[#d357f9]">●</span> {product.tipe}</p>
                                <p className="bg-[#d357f9] w-16 text-white rounded-md"> <span>⭐</span>{product.rating}</p>
                            </div>

                            {/* Name */}
                            <div className="w-44 mt-4">
                                <h1 className="text-xl font-semibold">{product.name}</h1>
                            </div>

                            {/* Class & Students */}
                            <div className="flex w-full gap-6 items-center mt-2">
                                <p className="text-black flex gap-4 items-center rounded-2xl"><FaBookOpen className="text-[#d357f9]"/> {product.class}</p>
                                <p className="text-black flex gap-4 items-center rounded-2xl"><IoMdPerson className="text-[#d357f9]"/>{product.students}</p>
                            </div>

                            <div className="border-b-1 border-black mt-2"></div>
                            
                            {/* Mentor */}
                            <div className="flex gap-2 items-center mt-2">
                                <img src={product.image} alt="" className="w-10 h-10 object-cover bg-black rounded-full" />
                                <h1 className="font-bold text-[#d357f9] ">{product.mentor}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
