import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white ">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-7">
        <div className="md:flex-1">
        <Title addClass="text-[28px]">Contact Us</Title>
          <div className="flex flex-col gap-y-2 mt-3">
            <div>
              <i className="fa fa-map-marker"></i>
              <span className="inline-block ml-2">Location</span>
            </div>
          
          <div>
            <i className="fa fa-phone"></i>
            <span className="inline-block ml-2">Call +90 05999999999</span>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <span className="inline-block ml-2">demo@gmail.com</span>
          </div>
          </div>
        </div>
        <div className="md:flex-1">
        <Title addClass="text-[35px]">X-Food</Title>
          <p className="mt-3">
          Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="flex justify-center mt-5 gap-x-2 ">
              <a href="" className="w-7 h-7 grid place-content-center bg-white text-secondary rounded-full hover:text-primary ">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="" className="w-7 h-7 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="w-7 h-7 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="w-7 h-7 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="w-7 h-7 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
        </div>
        <div className="md:flex-1">
        <Title addClass="text-[28px]">Opening Hours</Title>
          <div className="flex flex-col gap-y-2 mt-3">
            <div>
              
              <span className="inline-block ml-2">Everyday</span>
            </div>
          
          <div>
           
            <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
          </div>
          
          </div>
        </div>
        </div>
        
          <p className="text-center mt-10">
            © 2024 All Rights Reserved By Free Html Templates
          </p>
       
      </div>
    </div>
  );
};

export default Footer;
