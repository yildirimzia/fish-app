import React from "react";
import Image from "next/image";
type MenuItemProps = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div className="text-center">
      <Image
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
        className="w-full h-64 object-cover rounded-md"
      />
      <h3 className="font-Poppins  uppercase text-xl  mt-4 dark:text-white">
        {title}
      </h3>
      <p className="font-Poppins mt-2 text-[#5b6375] dark:text-white">
        {description} ${price.toFixed(2)}
      </p>
    </div>
  );
};

const MenuSection: React.FC = () => {
  const menuItems = [
    {
      title: "Grilled Fish",
      description: "Start from",
      price: 30.0,
      imageUrl: "/images/home-1.jpg",
    },
    {
      title: "Squid satay",
      description: "Start from",
      price: 42.0,
      imageUrl: "/images/home-2.jpg",
    },
    {
      title: "Red Crab",
      description: "Start from",
      price: 36.0,
      imageUrl: "/images/home-3.jpg",
    },
    {
      title: "Fried Shrimp",
      description: "Start from",
      price: 55.0,
      imageUrl: "/images/home-4.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="font-Poppins text-3xl sm:text-5xl text-rose-500 dark:text-white text-center mb-6">
        WE OFFER THE BEST FOR YOU
      </h2>
      <p className="font-Poppins text-center text-gray-500 mb-12 dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor.
      </p>
      <div className="flex sm:justify-center gap-[50px] sm:flex-row flex-col">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
