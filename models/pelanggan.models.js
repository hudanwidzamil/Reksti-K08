const mongoose = require('mongoose')

const pelangganSchema = mongoose.Schema({
  username_pelanggan: {
    type: String,
    required: true,
    unique: true
  },
  
  password: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  noHp: {
    type: String,
    // required: true
  },
  // metodepembayaran: {
  //   type: String,
  //   required: true
  // },
  namaAkun: {
    type: String,
    required: true
  },
  poin: {
    type: Number,
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

// memberSchema.plugin(autoIncrement.plugin, {
//   model: 'Lapangan',
//   field: 'lapangan_id'
// })

const Pelanggan = mongoose.model('Pelanggan', pelangganSchema, 'Pelanggans')

module.exports = Pelanggan
