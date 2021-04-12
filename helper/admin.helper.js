require('dotenv').config()
const mongoose = require('mongoose')
const db = require('../models/admin.models')

const createAdmin = async (admin_id, username_admin, password, alamat, noHP,namaAkun) => {
    try {
        const result = db.create({
            admin_id : admin_id,
            username_admin : username_admin,
            password : password,
            alamat: alamat,
            noHP:noHP,
            namaAkun:namaAkun
        })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

// const getSaldo = async (NIM,nama) => {
//     try {
        
//         const saldo = await db.findOne({
//             NIM : NIM,
//             Nama : nama
//         })
//         return saldo
//     } catch (err) {
//         throw new Error(err)
//     }
// }

const deleteAdmin = async (username_admin,password) => {
    try {
        const akun = await db.deleteOne({
            username_admin : username_admin,
            password : password
        })
        return akun
    } catch (err) {
        throw new Error(err)
    }
}

// const tambahSaldo = async (NIM,nama,saldo) => {
//     try {
//         var saldoawal = await db.findOne({
//             NIM : NIM,
//             Nama : nama
//         })
//         console.log(typeof saldoawal.Saldo )
//         const sisa = await db.updateOne({
//             NIM : NIM,
//             Nama : nama
//         },{
//             $set : {
//                 Saldo : saldoawal.Saldo + parseInt(saldo)
//             }
//         })
//         return sisa
//     } catch (err) {
//         throw new Error(err)
//     }
// }

module.exports = { 
    createAdmin,
    deleteAdmin
 }