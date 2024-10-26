import Link from "next/link";
import React from "react";

export const navItemsData = [
  { name: "Startseite", url: "/" },
  { name: "Hier finden Sie uns", url: "/hier-finden-sie-uns/" },
  { name: "Über uns", url: "/uber-uns" },
  { name: "Kontakt", url: "/kontakt" },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
  onClick: (index: number) => void;
};

const Navitems: React.FC<Props> = ({ activeItem, isMobile, onClick }) => {
  return (
    <>
      {/* For larger screens */}
      <div className="sm:flex hidden">
        {navItemsData.map((item, index) => (
          <Link href={item.url} key={index} passHref>
            <span
              className={`${
                activeItem === index
                  ? "dark:text-[#37a39a] text-[crimson]"
                  : "dark:text-white text-black"
              } text-[18px] font-Poppins font-[400] px-6`}
              onClick={() => onClick(index)}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* For mobile screens */}
      {isMobile && (
        <div className="sm:hidden ">
          <div className="w-full text-center py-6">
            <Link
              href={"/"}
              className="text-[25px] font-Poppins font-[500] text-white dark:text-black"
            >
              BRUCKER HAFEN
            </Link>
          </div>
          {navItemsData.map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                } text-[18px] font-Poppins font-[400] px-6`}
                onClick={() => onClick(index)}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navitems;
