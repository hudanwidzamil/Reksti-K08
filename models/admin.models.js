const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const adminSchema = mongoose.Schema({
  admin_id: {
    type: Number,
    required: true,
    unique: true
  },
  
  username_admin: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  noHP: {
    type: String,
    required: true
  },
  namaAkun: {
    type: String,
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

// adminSchema.plugin(autoIncrement.plugin, {
//   model: 'Admin',
//   field: 'admin_id'
// })

const Admin = mongoose.model('Admin', adminSchema, 'Admins')

module.exports = Admin
