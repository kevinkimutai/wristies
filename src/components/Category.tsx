import React from "react";
import Logo1 from "../assets/rolex-logo.jpg";
import Logo2 from "../assets/Breitling-Logo-1.png";
import Logo3 from "../assets/Casio-Logo.png";
import Logo4 from "../assets/Hamilton-logo.png";
import Logo5 from "../assets/Omega_Logo.svg.png";
import Logo6 from "../assets/Seiko_logo.svg.png";

const Category = () => {
  return (
    <section className="flex flex-col justify-center items-center p-4">
      <h1 className="text-xl text-red-800 font-bold">Click Watch By Brands.</h1>
      <div className="flex justify-center items-center">
        <div className="w-36 cursor-pointer m-4 border-2 border-red-800">
          <img src={Logo1} alt="Brand" className="object-contain" />
        </div>

        <div className="w-32 cursor-pointer m-4">
          <img src={Logo2} alt="Brand" className="object-contain" />
        </div>

        <div className="w-32 cursor-pointer m-4">
          <img src={Logo3} alt="Brand" className="object-contain" />
        </div>

        <div className="w-32 cursor-pointer m-4">
          <img src={Logo4} alt="Brand" className="object-contain" />
        </div>

        <div className="w-32 cursor-pointer m-4">
          <img src={Logo5} alt="Brand" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Category;
