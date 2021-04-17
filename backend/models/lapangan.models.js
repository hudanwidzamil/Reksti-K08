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
  ketersediaan: {
    type: Boolean,
  },
  // Only added when book is returned
//   BorrowingHistory: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Member'
//     }
//   ]
})

// memberSchema.plugin(autoIncrement.plugin, {
//   model: 'Lapangan',
//   field: 'lapangan_id'
// })

const Lapangan = mongoose.model('Lapangan', lapanganSchema, 'Lapangans')

module.exports = Lapangan
