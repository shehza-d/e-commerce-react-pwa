import React from 'react';
import { FaShoppingCart, FaGift, FaMobileAlt, FaTshirt, FaLaptop, FaGamepad, FaHome, FaSearch } from 'react-icons/fa'; // Using react-icons for ease

const Category = ({ name, icon }) => {
  return (
    <div className="box place-items-center center">
      <div className="text-center">
        <div className="text-xl">{icon}</div>
        <span className="block text-xs mt-1">{name}</span>
      </div>
    </div>
  );
};

const CategoryList = () => {
  const categories = [
    { name: 'Shopping', icon: <FaShoppingCart /> },
    { name: 'Gifts', icon: <FaGift /> },
    { name: 'Mobiles', icon: <FaMobileAlt /> },
    { name: 'Clothing', icon: <FaTshirt /> },
    { name: 'Electronics', icon: <FaLaptop /> },
    { name: 'Gaming', icon: <FaGamepad /> },
   
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category, index) => (
        <Category key={index} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
};

export default CategoryList;
