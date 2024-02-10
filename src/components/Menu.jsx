import React, { useState } from "react";
import { data } from "../data/data";




const Menu = () => {
    const [menu, setMenu] = useState(data);
    const filterKategori = (kategori) => {
        setMenu(
            data.filter((menu) => {
                return menu.kategori === kategori;
            })
        );
    };

    //   Filter by price
    const filterHarga = (kategoriHarga) => {
        setMenu(
            data.filter((menu) => {
                return menu.kategoriHarga === kategoriHarga;
            })
        );
    };

    return (
        <div className="max-w-[1640px] m-auto p-4 py-12 sm:px-8 md:px-12">
            <h1 className="text-orange-600 font-bold text-2xl text-center ">
                Daftar Menu
            </h1>

            <div className="flex flex-col md:flex-row justify-between">
                {/* filter tipe menu */}

                <div className="mb-4">
                    <h4 className="text-gray-600 font-bold text-sm mb-2">
                        Filter Berdasarkan Menu
                    </h4>

                    <button
                        onClick={() => setMenu(data)}
                        className="px-1 sm:px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        Semua
                    </button>
                    <button
                        onClick={() => filterKategori("bakso")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        Bakso
                    </button>
                    <button
                        onClick={() => filterKategori("camilan")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        Camilan
                    </button>
                    <button
                        onClick={() => filterKategori("paket")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        Paket
                    </button>
                    <button
                        onClick={() => filterKategori("minuman")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        Minuman
                    </button>
                </div>

                {/* filter harga */}
                <div className="mb-4">
                    <h4 className="text-gray-600 font-bold text-sm mb-2">
                        Filter Berdasarkan Harga
                    </h4>

                    <div className="flex justify-between max-w-[390px] w-full "></div>
                    <button
                        onClick={() => filterHarga("10K")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        10K
                    </button>
                    <button
                        onClick={() => filterHarga("20K")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        20K
                    </button>
                    <button
                        onClick={() => filterHarga("30K")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        30K
                    </button>
                    <button
                        onClick={() => filterHarga("40K")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        40K
                    </button>
                    <button
                        onClick={() => filterHarga("50K")}
                        className="px-2 py-1 mt-2 border border-yellow-600 hover:bg-yellow-600 hover:text-white mr-2 sm:mr-4 md:mr-5 rounded-md"
                    >
                        50K
                    </button>
                </div>
            </div>

            {/* Tampilan Menu */}
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
                    {menu.map((item, index) => (


                        <div key={index} className="border shadow-lg duration-700 rounded-lg ">
                            <img
                                src={item.gambar}
                                alt={item.nama}
                                className="w-full h-[200px] object-cover rounded-t-lg"
                            />
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold text-xs sm:text-sm">{item.nama}</p>
                                <span className="font-bold text-xs sm:text-sm rounded-lg p-1 px-2">
                                    {item.harga}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
