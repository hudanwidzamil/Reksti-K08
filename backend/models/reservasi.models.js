const mongoose = require('mongoose')
const Lapangan = require('../models/lapangan.models')
const Pelanggan = require('../models/pelanggan.models')

const reservasiSchema = mongoose.Schema({
  //  reservasi_id:{
  //      type: String,
  //      required: true,
  //      unique: true
  //  },
    lapangan_id: {
    type: mongoose.Schema.Types.Number,
    ref: Lapangan
  },
  username_pelanggan: {
    type: mongoose.Schema.Types.String,
    ref: Pelanggan
  },
  totalHarga: {
      type: Number
  },
  metodePembayaran: {
      type: String,
  },
  // durasiSewa: {
  //   type: Number,
  //   required: true
  // },
  timestampReservasi: {
      type: Date
  }
})

const Reservasi = mongoose.model('Reservasi', reservasiSchema, 'Reservasis')

module.exports = Reservasi
