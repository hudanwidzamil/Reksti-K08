require('dotenv').config()
const mongoose = require('mongoose')
const Lapangan = require('../models/lapangan.models')
const Reservasi = require('../models/reservasi.models')
const Pelanggan = require('../models/pelanggan.models')
const {updateKetersediaan} = require('../helper/lapangan.helper')

const createReservasi = async (reservasi_id,lapangan_id,username_pelanggan,totalHarga, metodePembayaran, durasiSewa, timestampReservasi) => {
    try {
      const lapangan = await Lapangan.findOne({
        lapangan_id : lapangan_id
      })
      if (lapangan === null) {
        throw new Error('Lapangan not exist')
      }
      if (lapangan.ketersediaan) {
        throw new Error('Lapangan tersedia')
      }
      const pelanggan = await Pelanggan.findOne({
        username_pelanggan: username_pelanggan
      })
      if (lapangan === null || pelanggan === null) {
        throw new Error('Lapangan or Pelanggan not exist')
      } else {
        await updateKetersediaan(lapangan_id, {
          Borrowed: false
        })
        const buatbooking = await Reservasi.create({
          reservasi_id: reservasi_id,
          lapangan_id: lapangan_id,
          totalHarga: totalHarga,
          metodePembayaran: metodePembayaran,
          durasiSewa: durasiSewa,
          timestampReservasi: timestampReservasi
        })
        return buatbooking
      }
    } catch (err) {
      throw Error(err)
    }
  }

  const getAllReservasi = async () => {
    try {
      const reservasi = await Reservasi.find()
      return reservasi
    } catch (err) {
      throw new Error(err)
    }
  }

  module.exports = {
      createReservasi,
      getAllReservasi
  }