const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const lapanganSchema = mongoose.Schema({
  lapangan_id: {
    type: Number,
    required: true,
  },
  
  luas_lapangan: {
    type: Number,
    required: true
  },
  hargasewa: {
    type: Number,
    required: true
  },
  tanggaltersedia: {
    type: Date,
    required: true
  },
  slotWaktu: {
    type: String,
  },
  ketersediaan: {
    type: Boolean,
  },
})

const Lapangan = mongoose.model('Lapangan', lapanganSchema, 'Lapangans')

module.exports = Lapangan
