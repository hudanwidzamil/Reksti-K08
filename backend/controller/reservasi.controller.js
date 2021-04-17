const { 
    createReservasi,
    getAllReservasi,
    getReservasibypelanggan
 } = require("../helper/reservasi.helper")

//create user baru
exports.createReservation = (req, res) => {
    console.log(
        req.body.lapangan_id,
        req.body.username_pelanggan, 
        req.body.totalHarga,
        req.body.metodePembayaran,
        req.body.timestampReservasi
        )
    if (
        req.body.lapangan_id &&
        req.body.username_pelanggan && 
        req.body.totalHarga &&
        req.body.metodePembayaran &&
        req.body.timestampReservasi
        ) {
        createReservasi(
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

exports.getresbyUser = (req,res) => {
  var Username = req.body.username_pelanggan;
  console.log(Username)

  if (
      Username
  ) {
      getReservasibypelanggan(
          Username
      )
      .then(
          result => {
              if (JSON.stringify(result) !== 'null') {
                  res.status(200).json(result)
              } else {
                  res.status(404).send({
                      message : 'Reservasi Not Found, Please Booking First!'
                  })
              }
          },
          err => {
              res.status(500).send({
                  message : err.message
              })
          }
      )
      .catch(err => {
          res.status(500).send({
            message: err.message
          })
        })
  }
}