const { 
    createUser,
    deleteUser,
    getAllPelanggan,
    loginPelanggan 
 } = require("../helper/pelanggan.helper")

//create user baru
exports.createUser = (req, res) => {
    console.log(
        req.body.username_pelanggan, 
        req.body.password,
        req.body.alamat,
        req.body.noHP,
        req.body.namaAkun,
        req.body.poin
        )
    if (
        req.body.username_pelanggan &&
        req.body.password &&
        req.body.alamat &&
        req.body.noHP &&
        req.body.namaAkun &&
        req.body.poin
    ) {
        createUser(
            req.body.username_pelanggan, 
            req.body.password,
            req.body.alamat,
            req.body.noHP,
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

//get data pelanggan
exports.loginPelanggan = (req,res) => {
    var Username = req.body.username_pelanggan;
    var Password = req.body.password;
    console.log(Username,Password)

    if (
        Username && Password
    ) {
        loginPelanggan(
            Username,
            Password
        )
        .then(
            result => {
                if (JSON.stringify(result) !== 'null') {
                    res.status(200).send({
                        message : 'Ok!'
                    })
                } else {
                    res.status(404).send({
                        message : 'User Not Found, Please Register First!'
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

exports.getPelanggan = (req, res) => {
      getAllPelanggan()
      .then(
        pelanggan => {
          if (JSON.stringify(pelanggan) !== 'null') {
            res.status(200).json(pelanggan)
          } else {
            res.status(404).send({
              message: 'Tidak ada pelanggan'
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