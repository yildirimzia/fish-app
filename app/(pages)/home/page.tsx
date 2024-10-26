import React, { FC } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";

type Props = {};
const Hero: FC<Props> = (props) => {
  return (
    <>
      <section className="relative w-full bg-hero-pattern bg-cover bg-center bg-no-repeat ">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/25"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-center lg:px-8">
          <div className="max-w-[100%] flex flex-col text-center items-center">
            <h1 className=" font-Poppins text-3xl font-extrabold text-white sm:text-8xl">
              Let us find your
              <strong className="font-Poppins block font-extrabold text-rose-500">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>

            <p className="font-Poppins mt-4 max-w-lg text-white w-full sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-left justify-center ">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <MenuItem />
    </>
  );
};

export default Hero;
