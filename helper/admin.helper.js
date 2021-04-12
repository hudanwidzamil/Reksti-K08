require('dotenv').config()
// const dbUrl = process.env.MONGO_URL
const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment')
// var connection = mongoose.createConnection(dbUrl, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// autoIncrement.initialize(connection)
const db = require('../models/saldo.models')

const createUser = async (NIM, nama, saldo) => {
    try {
        const result = db.create({
            NIM : NIM,
            Nama : nama,
            Saldo : saldo
        })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

const getSaldo = async (NIM,nama) => {
    try {
        
        const saldo = await db.findOne({
            NIM : NIM,
            Nama : nama
        })
        return saldo
    } catch (err) {
        throw new Error(err)
    }
}

const deleteAkun = async (NIM,nama) => {
    try {
        const akun = await db.deleteOne({
            NIM : NIM,
            Nama : nama
        })
        return akun
    } catch (err) {
        throw new Error(err)
    }
}

const tambahSaldo = async (NIM,nama,saldo) => {
    try {
        var saldoawal = await db.findOne({
            NIM : NIM,
            Nama : nama
        })
        console.log(typeof saldoawal.Saldo )
        const sisa = await db.updateOne({
            NIM : NIM,
            Nama : nama
        },{
            $set : {
                Saldo : saldoawal.Saldo + parseInt(saldo)
            }
        })
        return sisa
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = { 
    createUser,
    getSaldo,
    deleteAkun,
    tambahSaldo
 }