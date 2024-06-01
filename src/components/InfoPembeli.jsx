import React from 'react';
import dataPembeli from '../data/dataPembeli';

const InfoPembeli = () => {
  return (
    <div className='my-6'>
      <h2>Data Pembeli</h2>
      <ul>
        {dataPembeli.map((pembeli, index) => (
          <li key={index}>
            <strong>Nama:</strong> {pembeli.nama}, <strong>Nomor WA:</strong> {pembeli.nomorWA}, <strong>Alamat:</strong> {pembeli.alamat}, <strong>Pesanan:</strong> {pembeli.pesanan}, <strong>Total Harga:</strong> Rp. {pembeli.totalHarga}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoPembeli;
