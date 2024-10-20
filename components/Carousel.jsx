import React from "react";
import Image from "next/image";
import Title from "./ui/Title";



const Carousel = () => {
  return (
    <div className="h-screen w-full container mx-auto">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            alt=""
            src="/images/hero-bg.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      

      <div className="relative z-50 text-white top-40 flex flex-col items-start gap-y-10">
        <Title addClass="text-5xl">Fast Food Restaurant</Title>
        <p className="text-sm sm:w-2/5 w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          saepe in, iure voluptate molestiae id ut corporis. Culpa quia quas
          animi, porro quidem quaerat laudantium reprehenderit sunt. Est,
          mollitia incidunt!
        </p>
        <button className="btn-primary">Order Now</button>
      </div>
    </div>
  );
};

export default Carousel;
