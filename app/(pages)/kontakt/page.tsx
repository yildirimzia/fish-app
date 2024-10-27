import React, { FC } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from "next/image";
const Kontakt: FC = () => {
  return (
    <div className="dark:text-white dark:bg-opacity-50 ">
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-rose-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Pucher Str. 21 82256 Fürstenfeldbruck <br />
                </p>

                <p className="flex justify-center items-center gap-[10px] text-[20px] text-white/90 sm:mt-4 ">
                  <MdOutlinePhoneInTalk />
                  08141 31 77 155 <br />
                </p>

                <p className="flex justify-center items-center gap-[10px] text-[20px] text-white/90 sm:mt-4 ">
                  <MdOutlinePhonelinkRing /> 0176 450 433 16 <br />
                </p>

                <p className="flex justify-center items-center gap-[10px] text-[20px] text-white/90 sm:mt-4 ">
                  <MdOutlineMailOutline />
                  info@bruckerhafen.de
                  <br />
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <Image
                src="/images/contact.jpg"
                alt=""
                width={100}
                height={100}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <Image
                src="/images/contact.jpg"
                alt=""
                width={100}
                height={100}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
