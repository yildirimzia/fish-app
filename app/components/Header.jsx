"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navitems from "../utils/Navbar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ThemeSwitcher from "../utils/ThemeSwitcher";
const Header = ({ activeItem }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = (e) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full relative">
        <div
          className={`${
            active
              ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
              : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
          }`}
        >
          <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
            <div className="w-full flex items-center justify-between p-3">
              <div>
                <Link
                  href="/"
                  className="text-[25px] font-Poppins font-[500] text-black dark:text-white"
                >
                  BRUCKER HAFEN
                </Link>
              </div>

              <div className="flex items-center">
                <Navitems activeItem={activeItem} isMobile={false} />
                <ThemeSwitcher />
                <div className="sm:hidden flex">
                  <HiOutlineMenuAlt3
                    size={25}
                    className="dark:text-white text-black cursor-pointer"
                    onClick={() => setOpenSidebar(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[999999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <Navitems activeItem={activeItem} isMobile={true} />

              <br />
              <br />
              <p className="text-[16px] px-2 text-black">
                Copy Right 2024 Test
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
