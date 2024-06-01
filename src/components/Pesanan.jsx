import React, { useState, useEffect } from 'react';
import { data } from '../data/data';

const Pesanan = () => {
  const [jumlah, setJumlah] = useState(1);
  const [inputan, setInputan] = useState('');
  const [pesanan, setPesanan] = useState([]);
  const [nama, setNama] = useState('');
  const [nomorWA, setNomorWA] = useState('');
  const [alamat, setAlamat] = useState('');
  const [showCheckoutInfo, setShowCheckoutInfo] = useState(false);
  const [showNewOrderButton, setShowNewOrderButton] = useState(false);

  const filteredData = data.filter(item =>
    item.nama.toLowerCase().includes(inputan.toLowerCase())
  );

  const tambahJumlah = () => {
    setJumlah(jumlah + 1);
  };

  const kurangiJumlah = () => {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  };

  const tambahPesanan = () => {
    if (jumlah > 0 && inputan.trim() !== '') {
      const menu = data.find(item => item.nama.toLowerCase() === inputan.toLowerCase());
      if (menu) {
        const totalHarga = parseInt(menu.harga) * jumlah;
        setPesanan([...pesanan, { nama: inputan, jumlah: jumlah, harga: totalHarga }]);
        setJumlah(1);
        setInputan('');
      } else {
        alert("Maaf ya menunya gaada nihh");
      }
    }
  };

  const hapusPesanan = (index) => {
    const newPesanan = [...pesanan];
    newPesanan.splice(index, 1);
    setPesanan(newPesanan);
  };

  useEffect(() => {
    console.log(pesanan);
  }, [pesanan]);

  const hitungTotalHarga = () => {
    let total = 0;
    pesanan.forEach(item => {
      total += item.harga;
    });
    return total !== 0 ? total : '';
  };

  const tampilkanTotalHarga = () => {
    return hitungTotalHarga() !== 0 ? <p>Rp. {hitungTotalHarga()}.000</p> : '';
  };

  const handleCheckout = () => {
    if (nama.trim() === '' || nomorWA.trim() === '' || alamat.trim() === '') {
      alert("Mohon isi semua informasi terlebih dahulu.");
    } else {
      setShowCheckoutInfo(true);
      setShowNewOrderButton(true);
    }
  };

  const pesanBaru = () => {
    setNama('');
    setNomorWA('');
    setAlamat('');
    setPesanan([]);
    setShowCheckoutInfo(false);
    setShowNewOrderButton(false);
  };

  return (
    <div className='max-w-[1640px] m-auto justify-center p-4 sm:px-8 md:px-12  lg:px-[100px] items-center w-screen gap-10'>
      <h1 className='text-yellow-600 font-bold text-xl text-center md:text-3xl sm:text-2xl lg:text-4xl'>Pesan Delivery</h1>

      <div className='simpanMenu flex py-4 flex-col gap-4 w-full justify-center items-center'>
        {pesanan.map((item, index) => (
          <div className='flex flex-row gap-4' key={index}>
            <div className='w-[260px] h-auto min-h-[40px] px-2 pr-6 flex items-center py-1 text-sm rounded-md sm:text-sm text-yellow-600 border-yellow-600 border'>
              <p>{item.nama}</p>
            </div>
            <div className='w-[50px] h-auto flex min-h-[40px] justify-center items-center px-6 py-1 text-sm rounded-md sm:text-sm text-yellow-600 border-yellow-600 border'>
              <p>{item.jumlah}</p>
            </div>
            <div className='w-[90px] h-auto flex min-h-[40px] justify-center items-center px-6 py-1 text-sm rounded-md sm:text-sm text-yellow-600 border-yellow-600 border'>
              <p>{item.harga}.000</p>
            </div>
            <button className='w-[50px] h-auto flex min-h-[40px] ml-12 justify-center items-center px-6 py-1 text-lg text-red-600 border-red-600 border rounded-md hover:bg-red-600 hover:text-white' onClick={() => hapusPesanan(index)}>x</button>
          </div>
        ))}
      </div>

      <div className='flex flex-row gap-10 sm:justify-normal'>
        <input
          className='w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] border border-yellow-500 rounded-md pl-4 placeholder:text- sm:placeholder:text-sm placeholder:bg-transparent bg-transparent focus:outline-none'
          type="text"
          placeholder='Masukkan menu'
          value={inputan}
          onChange={(e) => setInputan(e.target.value)}
          list="namaBahanOptions"
        />
        <datalist id="namaBahanOptions">
          {filteredData.map((item) => (
            <option key={item.id} value={item.nama} />
          ))}
        </datalist>

        <div className='flex flex-row gap-4 border border-yellow-600 rounded-xl px-4 py-1'>
          <button className='text-yellow-600 hover:text-yellow-800' onClick={kurangiJumlah}>-</button>
          <p>{jumlah}</p>
          <button className='text-yellow-600 hover:text-yellow-800' onClick={tambahJumlah}>+</button>
        </div>
        <button className='rounded-md border border-yellow-600 px-2 md:px-4 lg:px-8 hover:bg-yellow-600 hover:text-white' onClick={tambahPesanan}>Tambah</button>

      </div>
      <div className='flex flex-row gap-10 mt-6'>
        <input
          className='w-full min-h-[60px] sm:w-[400px] md:w-[500px] lg:w-[550px] border border-yellow-500 rounded-md pl-4 placeholder:text- sm:placeholder:text-sm placeholder:bg-transparent bg-transparent focus:outline-none'
          type="text"
          placeholder='Masukkan nama'
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          className='w-full min-h-[60px] sm:w-[400px] md:w-[500px] lg:w-[550px] border border-yellow-500 rounded-md pl-4 placeholder:text- sm:placeholder:text-sm placeholder:bg-transparent bg-transparent focus:outline-none'
          type="text"
          placeholder='Masukkan Nomor (WA)'
          value={nomorWA}
          onChange={(e) => setNomorWA(e.target.value)}
        />
      </div>
      <div className='flex flex-row mt-6'>
        <input
          className='w-full min-h-[60px] sm:w-[400px] md:w-[500px] lg:w-[550px] border border-yellow-500 rounded-md pl-4 placeholder:text- sm:placeholder:text-sm placeholder:bg-transparent bg-transparent focus:outline-none'
          type="text"
          placeholder='Masukkan Alamat lengkap'
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
      </div>

      <button className='w-full mt-6 h-auto flex-col min-h-[60px] justify-center items-center px-6 py-1  rounded-md sm:text-lg text-white-600 bg-yellow-500 hover:bg-white hover:text-yellow-600 border-yellow-600 border text-xl font-bold tracking-wide gap-4' onClick={handleCheckout}>
        <p className='text-sm'>Check Out</p>
        <p className=''>{tampilkanTotalHarga()}</p>
      </button>
      {showCheckoutInfo && (
        <div className='flex flex-col px-4 justify-center items-center w-full'>
          <div className=" mt-6 border border-yellow-700 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] flex flex-col justify-center items-center">


            <div className=" flex flex-col rounded-md w-full gap-2 sm:gap-3 md:gap-5 justify-center items-center">
              <h2 className='text-xl sm:text-2xl md:text-4-xl text-black font-bold tracking-widest'>Nota</h2>

              <div className='w-full pl-16 flex flex-col gap-2'>
                <p className='text-lg text-left font-afacad font-normal text-gray400'>Nama: {nama}</p>
                <p className='text-lg text-left font-afacad font-normal text-gray400'>Nomor: {nomorWA}</p>
                <p className='text-lg text-left font-afacad font-normal text-gray400'>Alamat: {alamat}</p>

              </div>


              <div className='simpanMenu flex py-4 flex-col gap-4 w-full justify-center items-center'>
                {pesanan.map((item, index) => (
                  <div className='flex flex-row gap-4' key={index}>
                    <div className='w-[160px] h-auto min-h-[40px] px-2 pr-6 flex items-center py-1 rounded-md sm:text-lg md:text-xl text-gray400 font-afacad text-lg '>
                      <p>{item.nama}</p>
                    </div>
                    <div className='w-[50px] h-auto flex min-h-[40px] justify-center items-center px-6 py-1 rounded-md sm:text-lg md:text-xl text-gray400 font-afacad text-lg '>
                      <p>{item.jumlah}</p>
                    </div>
                    <div className='w-[90px] h-auto flex min-h-[40px] justify-center items-center px-6 py-1 rounded-md sm:text-lg md:text-xl text-gray400 font-afacad text-lg '>
                      <p>{item.harga}.000</p>
                    </div>
                  </div>


                ))}
                <div className=' h-auto flex flex-col w-full min-h-[40px] justify-center items-center px-6 py-1 rounded-md sm:text-lg md:text-xl text-gray400 font-afacad text-lg '>
                  <p className='flex flex-row gap-6'>Total Harga: {tampilkanTotalHarga()}</p>
                  <img src="/assets/images/qris.png" alt="" />
                </div>
              </div>

            </div>


          </div>
          

          <button className='w-full max-w-[600px] mt-6 h-auto flex-col min-h-[60px] justify-center items-center px-6 py-1  rounded-md sm:text-lg text-white-600 bg-yellow-500 hover:bg-white hover:text-yellow-600 border-yellow-600 border text-xl font-bold tracking-wide gap-4' onClick={pesanBaru}>
            <p className='text-sm'>Pesanan Baru</p>
          </button>
        </div>
        
      )}
    </div>
  );
};

export default Pesanan;
