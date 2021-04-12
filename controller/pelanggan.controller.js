const { 
    createUser,
    deleteUser
 } = require("../helper/pelanggan.helper")

//create user baru
exports.createUser = (req, res) => {
    console.log(
        req.body.username_pelanggan, 
        req.body.password,
        req.body.alamat,
        req.body.noHP,
        req.body.metodepembayaran,
        req.body.namaAkun,
        req.body.poin
        )
    if (
        req.body.username_pelanggan &&
        req.body.password &&
        req.body.alamat &&
        req.body.noHP &&
        req.body.metodepembayaran &&
        req.body.namaAkun &&
        req.body.poin
    ) {
        createUser(
            req.body.username_pelanggan, 
            req.body.password,
            req.body.alamat,
            req.body.noHP,
            req.body.metodepembayaran,
            req.body.namaAkun,
            req.body.poin
        )
        .then(
            result => {
                res.status(201).json({
                    "message" : 'User created!'
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

//delete akun
exports.deleteUser = (req, res) => {
    if (
        req.body.username_pelanggan && req.body.password
    ) {
        deleteUser(
            req.body.username_pelanggan,
            req.body.password,
        )
        .then(
            result => {
                res.status(201).send({
                    message : 'User deleted!'
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