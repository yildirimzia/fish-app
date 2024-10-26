"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import Navitems from "../utils/Navbar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ThemeSwitcher from "../utils/ThemeSwitcher";

interface Props {
  activeItem: number;
  onClick: (index: number) => void;
}

const Header: FC<Props> = ({ activeItem, onClick }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  console.log(activeItem, "active");

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "screen") {
      setOpenSidebar(false);
    }
  };

  const handleThemeChange = () => {
    setActive(!active);
  };

  return (
    <div
      className={`w-full relative z-50 dark:bg-gradient-linear-one ${
        activeItem !== 0 ? "h-20" : ""
      }`}
    >
      <div className="w-full relative">
        <div
          className={`fixed top-0 left-0 w-full h-[80px] z-[80] shadow-xl transition duration-500 ${
            active
              ? "dark:bg-opacity-50 1 "
              : "text-black z-[80]  dark:shadow 2 bg-white "
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
                <Navitems
                  activeItem={activeItem}
                  isMobile={true}
                  onClick={onClick}
                />{" "}
                {/* Pass the handler here */}
                <ThemeSwitcher onThemeChange={handleThemeChange} />
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
              <Navitems
                onClick={onClick}
                activeItem={activeItem}
                isMobile={true}
              />{" "}
              {/* Pass the handler here */}
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
