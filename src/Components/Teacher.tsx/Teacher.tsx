import React from 'react'
import Button from '../../view/Button'



const Teacher : React.FC = () => {
    return (
                <div className={`w-full h-screen xl:px-50 text-slate-800 bg-[#fcf4fc] flex flex-col-reverse xl:flex-row justify-center items-center`}>
                {/* Left Text */}
                <div className="w-full text-center xl:text-start  flex px-10  items-center h-screen ">
                    <div className="w-full space-y-4 xl:space-y-10">
                        <h1 className={`text-4xl font-bold`}>If You Are Certified Teacher then Join Our Team</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.</p>
                        <Button> Offer Now  </Button>
                    </div>
                </div>
                <div className="w-full h-screen flex items-center justify-center ">
                  
                    <img src="/2.png"  className={` w-full h-[470px] object-cover `}/>
                 
                </div>
                </div>
    )
}

export default Teacher 