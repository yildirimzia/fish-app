import React, { FC } from "react";

const HierFindenSieUns: FC = () => {
  return (
    <section className="dark:text-white dark:bg-opacity-50 dark:from-gray-900 dark:to-black">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASzqnCrYBWXhFtdlXXBg_KCLxQTa1I5Y4&q=48.17874%2C11.25197&center=48.17874%2C11.25197&zoom=16&maptype=roadmap"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              ></iframe>
            </div>
          </div>

          <div className="relative flex items-center dark:from-gray-900 dark:to-black">
            <span className="hidden dark:from-gray-900 dark:to-black lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 "></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl dark:text-white font-Poppins">
                So finden Sie uns
              </h2>

              <p className="mt-4 text-gray-600 dark:text-white font-Poppins">
                BRUCKER HAFEN <br /> Koray Menekseoglu
              </p>

              <p className="mt-4 text-gray-600 dark:text-white font-Poppins">
                Pucher Str. 21 <br /> 82256 Fürstenfeldbruck
              </p>

              <a
                href="#"
                className="mt-8 font-Poppins inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HierFindenSieUns;
