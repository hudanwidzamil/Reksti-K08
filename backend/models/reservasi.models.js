const mongoose = require('mongoose')
const Lapangan = require('../models/lapangan.models')
const Pelanggan = require('../models/pelanggan.models')

const reservasiSchema = mongoose.Schema({
  lapangan_id: {
    type: mongoose.Schema.Types.Number,
    ref: Lapangan
  },
  tanggaltersedia: {
    type: Date,
  },
  slotWaktu: {
    type: String,
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
  timestampReservasi: {
      type: Date
  }
})

const Reservasi = mongoose.model('Reservasi', reservasiSchema, 'Reservasis')

module.exports = Reservasi
