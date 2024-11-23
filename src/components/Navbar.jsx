import React, { useState } from 'react';
import logo from "../assets/logo/logoipsum-269.svg";
import { CiSearch } from "react-icons/ci";
import { FaHeart, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const links = [
   { title: "Home", link: "/" },
   { title: "About", link: "/about" },
   { title: "Contect", link: "/contect" },
];

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = false ;

  const navLinkStyle = "capitalize hover:underline cursor-pointer hover:text-primary";

  return (
    <div className='h-28 relative flex justify-around items-center'>
      <img src="https://dynamic.design.com/asset/logo/2a2b0531-f004-4e9e-afe7-88abde57444e/logo-search-grid-1x?logoTemplateVersion=2&v=638434245537230000&text=Hash" alt="Logo" height={60} width={60} className=' rounded-full '/>

      <div className='bg-[#f5f5f5] rounded flex justify-around items-center w-60 h-10 px-2'>
        <input
          type="search"
          className='bg-transparent outline-none text-sm w-full'
          placeholder='What are you looking for?'
        />
        <CiSearch className='font-bold text-3xl' />
      </div>

      <button
        className='md:hidden order-1 text-2xl'
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        {isHamburgerOpen ? <IoMdCloseCircleOutline /> : <CiMenuFries />}
      </button>

      {isHamburgerOpen && (
        <ul className='absolute bg-gray-200 w-full z-10 gap-3 center justify-around  pl-6 top-28  h-14'>
          {links.map((item, i) => (
            <li key={i}>
              <a className='hover:bg-primary px-12 py-0 transition-all duration-300 ease-in-out rounded-r-full' href={item.link}>{item.title}</a>
            </li>
          ))}
          {!isLoggedIn && <li className={navLinkStyle}>
            
              
        <Link to  ="/login" className='rounded-b-md border-2 border-red-600 px-6 py-0 font-medium text-red-600 hover:bg-red-600 hover:text-white
        m-0 transition-all duration-300 ease-in-out ' >Login</Link>
        
            </li>}
        </ul>
      )}

     
<ul className='hidden md:flex gap-3'>
        {links.map((item, i) => (
          <li key={i} className='hover:bg-primary px-3 py-0 transition-all duration-300 ease-in-out rounded-r-full'>
            <Link to ={item.link}>{item.title}</Link>
          </li>
        ))}
        {!isLoggedIn && <li className={navLinkStyle}>
          
        <Link to  ="/login" className='rounded-bl-xl border-2 border-red-600 px-6 py-3 font-medium text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out' >Login</Link>
        
          
          </li>
        }
      </ul>

      <div className='flex items-center gap-3 text-2xl'>
        {isLoggedIn && (
          <>
            <FaHeart />
            <FaShoppingCart />
          </>
        )}
        
        <Link to={"/profile"} className='bg-primary rounded-full h-10 w-10 flex justify-center items-center text-base overflow-hidden'>
          {isLoggedIn ? (
            <img
              src="https://img.freepik.com/premium-vector/user-login-icon-vector-image-can-be-used-security_120816-252521.jpg?w=740"
              alt="User"
              className="h-full w-full object-cover"
            />
          ) : (
            <FaRegUser />
          )}
        </Link>
      </div>
    </div>
  );
}
