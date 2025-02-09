import React from "react";

interface Props {
    children: React.ReactNode
    variant?: string
}
const Button: React.FC<Props> = ({children, variant}) => {

    return (
        <div>
              <button className={` ${variant} bg-primary-gradient hover:border-b-fuchsia-50 hover:border-e-fuchsia-50  border border-fuchsia-400 hover:bg-primary-gradient text-black hover:text-white px-4 py-1 rounded-lg  transition duration-600`}>
               {children}
              </button>
        </div>
    )
}

export default Button