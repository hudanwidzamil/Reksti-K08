const { 
    createAdmin,
    deleteAdmin
 } = require("../helper/admin.helper")

//create user baru
exports.createAdmin = (req, res) => {
    console.log(req.body.admin_id, 
        req.body.username_admin, 
        req.body.password,
        req.body.alamat,
        req.body.noHP,
        req.body.namaAkun
        )
    if (
        req.body.admin_id && 
        req.body.username_admin && 
        req.body.password &&
        req.body.alamat &&
        req.body.noHP &&
        req.body.namaAkun
    ) {
        createAdmin(
            req.body.admin_id, 
            req.body.username_admin, 
            req.body.password,
            req.body.alamat,
            req.body.noHP,
            req.body.namaAkun
        )
        .then(
            result => {
                res.status(201).json({
                    "message" : 'Admin created!'
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

//get saldo
// exports.getSaldoUser = (req,res) => {
//     var NIM = req.params.nim;
//     var Nama = req.params.nama
//     console.log(NIM,Nama)

//     if (
//         NIM && Nama
       
//     ) { 
//         getSaldo(
//             NIM, Nama
//         )
//         .then(
//             saldo => {
//                 if (JSON.stringify(saldo) !== 'null') {
//                     res.status(200).json(saldo.Saldo)
//                 } else {
//                     res.status(404).send({
//                         message : 'User Not Found, Please Register First!'
//                     })
//                 }
//             },
//             err => {
//                 res.status(500).send({
//                     message : err.message
//                 })
//             }
//         )
//         .catch(err => {
//             res.status(500).send({
//               message: err.message
//             })
//           })
//     }
// }



//delete akun
exports.deleteAdmin = (req, res) => {
    if (
        req.body.username_admin && req.body.password
    ) {
        deleteAdmin(
            req.body.username_admin,
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



//tambah saldo
// exports.addSaldoUser = (req,res) => {
//     if (
//         req.body.NIM && req.body.nama && req.body.saldo
//     ) { 
//         tambahSaldo(
//             req.body.NIM,
//             req.body.nama,
//             req.body.saldo
//         )
//         .then(
//             sisa => {
//                 if (JSON.stringify(sisa) !== 'null') {
//                     res.status(200).send({
//                         message : 'SAldo Updated!'
//                     })
//                 } else {
//                     res.status(404).send({
//                         message : 'User Not Found, Please Register First!'
//                     })
//                 }
//             },
//             err => {
//                 res.status(500).send({
//                     message : err.message
//                 })
//             }
//         )
//         .catch(err => {
//             res.status(500).send({
//               message: err.message
//             })
//           })
//     }
// }
