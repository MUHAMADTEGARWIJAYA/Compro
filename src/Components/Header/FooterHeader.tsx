import React from "react";

const FooterHeader: React.FC = () => {
    return (
        <div className="relative z-20 py-2 px-4 w-full bg-secondary flex justify-center items-center overflow-hidden">
            <div className="flex w-full max-w-6xl overflow-x-auto xl:space-x-12  xl:justify-center scrollbar-hide ">
                {/* Pertama */}
                <div className="snap-center flex-shrink-0">
                    <img src="/logotype-white.svg" className="h-24 w-44" alt="" />
                </div>
                {/* Kedua */}
                <div className="snap-center flex-shrink-0">
                    <img src="/apple-pay-svgrepo-com.svg" className="h-24 w-44" alt="" />
                </div>
                {/* Ketiga */}
                <div className="snap-center flex-shrink-0">
                    <img src="/brandfolder-svgrepo-com.svg" className="h-24 w-44 object-cover" alt="" />
                </div>
                {/* Keempat */}
                <div className="snap-center ml-10 xl:ml-0 flex-shrink-0">
                    <img src="/micro.svg" className="h-24 w-44 object-cover" alt="" />
                </div>
                {/* Kelima */}
                <div className="snap-center ml-10 xl:ml-0 flex-shrink-0">
                    <img src="/cloudacademy-svgrepo-com.svg" className="h-24 w-54 object-cover" alt="" />
                </div>
            </div>
        </div>
    );
}

export default FooterHeader;