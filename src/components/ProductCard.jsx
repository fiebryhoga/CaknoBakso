import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'

const TopMenu = (props) => {
    return (
        <div className="rounded-xl relative shadow-md shadow-slate-200">
            <div className="containerGambar flex justify-center items-center rounded-t-lg w-full bg-black">
                
                <img
                    className=" object-cover max-h-[160px] w-full md:max-h-[200px] lg:max-h-[230px] rounded-t-lg"
                    src={props.gambar}
                    alt="baksoBesar"
                />
            </div>

            <div className="container max-h-[110px] flex flex-col justify-start items-center py-3">
                <h2 className="namaMenu texs-center text-2xl font-semibold">
                    {props.bakso}
                </h2>
                <p className=" text-justify font-normal">{props.deskripsi}</p>
            </div>
        </div>
    )
}

const ProductCard = () => {
    return (
        <div className="flex flex-col justify-center p-4 py-12 sm:px-8 md:px-12 items-center w-screen gap-10">
            <div className="max-w-[1640px] mx-auto grid w-full sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <TopMenu gambar={"/assets/images/BaksoTahu.jpg"} bakso={'Bakso Iga'} deskripsi={'iga enak poll'} />
                <TopMenu gambar={"/assets/images/baksoCabe.jpg"} bakso={'Bakso Iga'} deskripsi={'iga enak poll'} />
                <div className='sm:hidden lg:flex'>
                <TopMenu gambar={"/assets/images/baksoBakar.jpg"} bakso={'Bakso Iga'} deskripsi={'iga enak poll'} />

                </div>

                <div className="w-full hidden sm:flex lg:hidden sm:justify-center sm:items-center sm:col-span-2">
                    <TopMenu gambar={"/assets/images/baksoBakar.jpg"} bakso={'Bakso Iga'} deskripsi={'iga enak poll'} />
                </div>
            </div>
        </div>

    )
}

export default ProductCard
