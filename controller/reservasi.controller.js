const { 
    createReservasi,
    getAllReservasi 
 } = require("../helper/reservasi.helper")

//create user baru
exports.createReservation = (req, res) => {
    console.log(
        req.body.reservasi_id,
        req.body.lapangan_id,
        req.body.username_pelanggan, 
        req.body.totalHarga,
        req.body.metodePembayaran,
        req.body.durasiSewa,
        req.body.timestampReservasi
        )
    if (
        req.body.reservasi_id &&
        req.body.lapangan_id &&
        req.body.username_pelanggan && 
        req.body.totalHarga &&
        req.body.metodePembayaran &&
        req.body.durasiSewa &&
        req.body.timestampReservasi
        ) {
        createReservasi(
            req.body.reservasi_id,
            req.body.lapangan_id,
            req.body.username_pelanggan, 
            req.body.totalHarga,
            req.body.metodePembayaran,
            req.body.durasiSewa,
            req.body.timestampReservasi
        )
        .then(
            result => {
                res.status(201).json({
                    "message" : 'Reservation created!'
                })
            },
            err => {
                res.status(500).send({
                  message: err.message
                })
              }
        )
        .catch(err => {
            res.status(500).send({
              message: err.message
            })
          })
    } else {
        res.status(400).send({
            message :'Required body not found'
        })
    }
}

exports.getResevation = (req, res) => {
    getAllReservasi()
    .then(
      reservasi => {
        if (JSON.stringify(reservasi) !== 'null') {
          res.status(200).json(reservasi)
        } else {
          res.status(404).send({
            message: 'Tidak ada reservasi'
          })
        }
      },
      err => {
        res.status(500).send({
          message: err.message
        })
      }
    )
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}