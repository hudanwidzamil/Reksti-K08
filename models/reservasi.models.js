const mongoose = require('mongoose')

const reservasiSchema = mongoose.Schema({
   reservasi_id:{
       type: String,
       required: true,
       unique: true
   },
    lapangan_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lapangan'
  },
  username_pelanggan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelanggan'
  },
  totalHarga: {
      type: Int16Array
  },
  metodePembayaran: {
      type: String,
  },
  durasiSewa: {
    type: Date,
    required: true
  },
  poin: {
    type: String,
    required: true
  },
  timestampReservasi: {
      type: Date,
      required: true
  }
})

const Reservasi = mongoose.model('Reservasi', reservasiSchema, 'Reservasis')

module.exports = Reservasi
