import React from "react";
import Button from "../../view/Button";
const Header: React.FC = () => {
    return (
        // <Content tinggi="h-[]" className="" variant="Develop Your skills in a new and unique way" img="/public/fix.png" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia." title="Enroll Now" />
        <div className={`w-full h-[770px] xl:h-[670px] text-slate-800 bg-[#fcf4fc] xl:px-44 flex flex-col xl:flex-row justify-center items-center `}>
        {/* Image Right */}
        
        
        {/* Left Text */}
        <div className="w-full text-center xl:text-start mt-20  flex px-10  items-center h-screen ">
            <div className="w-full space-y-4 xl:space-y-10">
                <h1 className={`text-4xl font-bold `}>Develop Your skills in a new and unique way</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.</p>
                <Button> Enroll Now  </Button>
            </div>
        </div>
        <div className="w-full  flex justify-center px-10 ">
            <div >
            <img src="/public/fix.png"  className={`w-full h-[470px] xl:h-screen  object-cover`}/>
            </div>
        </div>
        </div>
    );
}



export default Header