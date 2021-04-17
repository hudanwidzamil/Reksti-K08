const mongoose = require('mongoose')

const promoSchema = mongoose.Schema({
   reservasi_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservasi'
  },
  username_pelanggan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelanggan'
  },
  promo: {
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

const Promo = mongoose.model('Promo', promoSchema, 'Promos')

module.exports = Promo
