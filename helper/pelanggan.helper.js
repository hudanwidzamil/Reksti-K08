require('dotenv').config()
const mongoose = require('mongoose')
const db = require('../models/pelanggan.models')

const createUser = async (username_pelanggan, password, alamat, noHP,namaAkun, poin) => {
    try {
        const result = db.create({
            username_pelanggan : username_pelanggan,
            password : password,
            alamat : alamat,
            noHP : noHP,
            namaAkun : namaAkun,
            poin : poin
        })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

const loginPelanggan = async (username_pelanggan,password) => {
    try {
        
        const loginPelanggan = await db.findOne({
            username_pelanggan : username_pelanggan,
            password : password
        })
        return loginPelanggan
    } catch (err) {
        throw new Error(err)
    }
}

const deleteUser = async (username_pelanggan,password) => {
    try {
        const akun = await db.deleteOne({
            username_pelanggan : username_pelanggan,
            password : password
        })
        return akun
    } catch (err) {
        throw new Error(err)
    }
}

const getAllPelanggan = async () => {
    try {
      const pelanggan = await db.find()
      return pelanggan
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
    createUser,
    deleteUser,
    loginPelanggan,
    getAllPelanggan
 }