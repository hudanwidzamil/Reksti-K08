require('dotenv').config()
const mongoose = require('mongoose')
const Lapangan = require('../models/lapangan.models')
const Reservasi = require('../models/reservasi.models')
const Pelanggan = require('../models/pelanggan.models')
const {updateKetersediaan} = require('../helper/lapangan.helper')
const {tambahPoin} = require('../helper/pelanggan.helper')

const createReservasi = async (lapangan_id,tanggaltersedia,slotWaktu,username_pelanggan,totalHarga, metodePembayaran, timestampReservasi) => {
    try {
      const lapangan = await Lapangan.findOne({
        lapangan_id : lapangan_id,
        tanggaltersedia: tanggaltersedia,
        slotWaktu: slotWaktu
      })
      if (lapangan === null) {
        throw new Error('Lapangan not exist')
      }
      if (!lapangan.ketersediaan) {
        throw new Error('Lapangan tidak tersedia')
      }
      const pelanggan = await Pelanggan.findOne({
        username_pelanggan: username_pelanggan
      })
      if (lapangan === null || pelanggan === null) {
        throw new Error('Lapangan or Pelanggan not exist')
      } else {
        await updateKetersediaan(lapangan_id,tanggaltersedia,slotWaktu, {
          Borrowed: false
        })
        await tambahPoin(username_pelanggan)
        const buatbooking = await Reservasi.create({
          lapangan_id: lapangan_id,
          tanggaltersedia: tanggaltersedia,
          slotWaktu: slotWaktu,
          username_pelanggan: username_pelanggan,
          totalHarga: totalHarga,
          metodePembayaran: metodePembayaran,
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
      const allreservasi = await Reservasi.find()
      return allreservasi
    } catch (err) {
      throw new Error(err)
    }
  }

const getReservasibypelanggan = async (username_pelanggan) => {
  try {
    const reservasipelanggan = await Reservasi.find({
      username_pelanggan: username_pelanggan
    })
    return reservasipelanggan
  } catch (err) {
    throw new Error(err)
  }
}

  module.exports = {
      createReservasi,
      getAllReservasi,
      getReservasibypelanggan
  }