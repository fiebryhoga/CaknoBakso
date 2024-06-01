import React from 'react';

const Home = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 sm:px-8 md:px-12 rounded-xl'>
            <div className="max-h-[600px] relative rounded-xl">

                <div className=' absolute w-full h-full text-gray-100 rounded-xl text-right max-h-[600px] bg-black/60 flex flex-col pt-10 justify-center'>
                    <h1 className='px-6 sm:px-8 md:px-12 lg:px-16 mt-10 pb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Bakso <span className='text-orange-500'>Terbaik</span></h1>
                    <h1 className='px-6 sm:px-8 md:px-12 lg:px-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Se-Malang</span> Raya</h1>
                </div>
                <img className=' object-cover rounded-xl w-full max-h-[600px]' src="/assets/images/ton6.jpg" alt="" />
            </div>

        </div>
    )
}

export default Home;