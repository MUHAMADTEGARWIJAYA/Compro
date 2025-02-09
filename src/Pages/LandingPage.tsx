import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header/Header";
import FooterHeader from "../Components/Header/FooterHeader";
import Courses from "../Components/Courses/Courses";
import ProductsPage from "../Components/Products/Products";
import Teacher from "../Components/Teacher.tsx/Teacher";
const LandingPage: React.FC = () => {
return(
    <div className="bg-[#fcf4fc] ">
    <Navbar />  
    <Header />
    <FooterHeader />
    <Courses />
    <ProductsPage />
    <Teacher />
    </div>
)
}

export default LandingPage