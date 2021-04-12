const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const lapanganSchema = mongoose.Schema({
  lapangan_id: {
    type: Number,
    required: true,
    unique: true
  },
  
  luas_lapangan: {
    type: Int16Array,
    required: true
  },
  hargasewa: {
    type: Int16Array,
    required: true
  },
  jamtersedia: {
    type: Date,
    required: true
  },
  ketersediaan: {
    type: Boolean,
    required: true
  },
  // Only added when book is returned
//   BorrowingHistory: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Member'
//     }
//   ]
})

memberSchema.plugin(autoIncrement.plugin, {
  model: 'Lapangan',
  field: 'lapangan_id'
})

const Lapangan = mongoose.model('Lapangan', lapanganSchema, 'Lapangans')

module.exports = Lapangan
