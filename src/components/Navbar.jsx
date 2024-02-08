import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb"

const Navbar = () => {
    const [nav, setNav] =useState(false);
    return (
        <div className=" max-w-[1640px] mx-auto flex justify-between items-center
        p-4 sm:px-8 md:px-12">
            <div className=" flex items-center mx-auto justify-between gap-28 sm:gap-12 md:gap-12 lg:gap-20">

                <button className="flex sm:hidden">
                    <BsFillCartFill size={25} className="text-yellow-600" />
                </button>

                <img className="w-16 sm:w-20" src="/assets/images/logo.png" alt="" />


                <div className="bg-transparant hidden sm:flex rounded-full border border-yellow-600 p-2 items-center px-4 sm:w-[400px] md:w-[500px] lg-w[700px] lg:ml-32">
                    <AiOutlineSearch size={25} className="text-yellow-600" />
                    <input className="  w-full ml-4 placeholder:text-xs placeholder:bg-transparent bg-transparent focus:outline-none" type="text" placeholder="Masukkan Menu" />
                </div>

                <button className="group hidden sm:flex px-4 py-2 bg-yellow-600 rounded-full gap-2 items-center hover:bg-white hover:border hover:border-yellow-600">
                    <BsFillCartFill size={20} className=" group-hover:text-yellow-600 text-white" />
                    <p className="text-xs text-white font-medium group-hover:text-yellow-600">Pesan</p>
                </button>

                <div onClick={() => setNav(!nav)} className=" cursor-pointer  ">
                    <AiOutlineMenu size={30} className="text-yellow-600" />
                </div>

                {/* Mobile Menu */}

                {nav?<div className="bg-black opacity-25 fixed w-full h-screen z-10 top-0 right-0">

                </div> : ''}

                <div className={nav ? 'fixed top-0 w-[70%] sm:w-[36%] md:w-[32%] lg:w-[28%]   right-0 h-screen bg-white z-10 transition-all ease-in-out duration-700' : 'fixed top-0 w-[70%] sm:w-[36%] md:w-[32%] lg:w-[28%]   left-[100%] h-screen bg-white z-10 transition-all ease-in-out duration-700' }>
                    <AiOutlineClose onClick={() => setNav(!nav)} size={30} className=" absolute text-yellow-600 left-4 top-8 cursor-pointer" />
                    <img className="w-16 ml-52 mt-4" src="/assets/images/logo.png" alt="" />

                    <nav>
                        <ul className="flex flex-col gap-8 mt-16">
                            <li className="flex justify-end px-8 items-center">
                                <p className=" text-sm font-medium text-yellow-600">Pesan Antar</p>
                                <TbTruckDelivery size={25} className="text-yellow-600 ml-4"/>

                            </li>
                            <li className="flex justify-end px-8 items-center">
                                <p className=" text-sm font-medium text-yellow-600">Pesan Antar</p>
                                <TbTruckDelivery size={25} className="text-yellow-600 ml-4"/>

                            </li>
                            <li className="flex justify-end px-8 items-center">
                                <p className=" text-sm font-medium text-yellow-600">Pesan Antar</p>
                                <TbTruckDelivery size={25} className="text-yellow-600 ml-4"/>

                            </li>
                            <li className="flex justify-end px-8 items-center">
                                <p className=" text-sm font-medium text-yellow-600">Pesan Antar</p>
                                <TbTruckDelivery size={25} className="text-yellow-600 ml-4"/>

                            </li>
                        </ul>
                    </nav>

                </div>



            </div>

        </div>
    );
};

export default Navbar;
