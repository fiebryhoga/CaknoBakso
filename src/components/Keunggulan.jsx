import React from 'react'

const Keunggulan = () => {
    return (
        <div className='max-w-[1640px] m-auto justify-center p-4 sm:px-8 md:px-12 items-center w-screen gap-10'>
            <h1 className='text-center text-orange-600 font-bold text-2xl'>Bakso Cak No</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 relative justify-center items-center pt-6 gap-8 sm:gap-2">
                <div className='flex gap-4 flex-col items-center'>
                    <img className='max-h-[160px] sm:max-h-[190px] md:max-h-[220px]' src="/assets/images/delivery.png" alt="" />
                    <p className='text-yellow-600 font-bold text-center '>Free Delivery</p>
                    <p className='max-w-[200px] text-center font-afacad'>Pelanggan bisa memesan delivery bakso cak no lewat website dengan <span className='text-yellow-600'>gratis ongkir</span> tanpa biaya tambahan. </p>
                </div>
                <div className='flex gap-4 flex-col items-center'>
                    <img className='max-h-[160px] sm:max-h-[190px] md:max-h-[220px]' src="/assets/images/halal.png" alt="" />
                    <p className='text-yellow-600 font-bold text-center '>Terjamin Halal</p>
                    <p className='max-w-[200px] text-center font-afacad'>Bakso kami menggunakan <span className='text-yellow-600'>100 persen daging sapi asli</span> sehinga terjamin akan kenikmatan dan kehalalannya</p>
                </div>
                <div className='flex sm:hidden md:flex gap-4 flex-col items-center'>
                    <img className='max-h-[160px] sm:max-h-[190px] md:max-h-[220px]' src="/assets/images/catering.png" alt="" />
                    <p className='mt-1 text-yellow-600 font-bold text-center '>Terima Catering</p>
                    <p className='max-w-[240px] text-center font-afacad'>Kami menerima pesanan dalam jumlah banyak terumata di acara hajatan, pernikahan, arisan dll. Tim kami <span className='text-yellow-600'>siap didatangkan</span> ke tempat</p>
                </div>

                <div className=' hidden w-full sm:flex items-center justify-center col-span-2 md:hidden'>
                <div className='flex gap-4 flex-col items-center'>
                    <img className='max-h-[160px] sm:max-h-[190px] md:max-h-[220px] pr-4' src="/assets/images/catering.png" alt="" />
                    <p className='text-yellow-600 font-bold text-center '>Terima Catering</p>
                    <p className='max-w-[240px] text-center font-afacad'>Kami menerima pesanan dalam jumlah banyak terumata di acara hajatan, pernikahan, arisan dll. Tim kami <span className='text-yellow-600'>siap didatangkan</span> ke tempat</p>
                </div>
                </div>

                

            </div>
        </div>
    )
}

export default Keunggulan
