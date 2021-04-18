require('dotenv').config()
const mongoose = require('mongoose')
const db = require('../models/lapangan.models')

const createLapangan = async (lapangan_id, luas_lapangan, hargasewa, tanggaltersedia, slotWaktu,ketersediaan) => {
    try {
        const result = db.create({
            lapangan_id : lapangan_id,
            luas_lapangan : luas_lapangan,
            hargasewa: hargasewa,
            tanggaltersedia: tanggaltersedia,
            slotWaktu: slotWaktu,
            ketersediaan: ketersediaan
        })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

const updateKetersediaan = async (lapangan_id, tanggaltersedia, slotWaktu) => {
        try {
            const tersedia = await db.updateOne({
                lapangan_id : lapangan_id,
                tanggaltersedia: tanggaltersedia,
                slotWaktu: slotWaktu
            },{
                $set : {
                    ketersediaan : false
                }
            })
            return tersedia
        } catch (err) {
            throw new Error(err)
        }
    }

const getAllLapangan = async () => {
    try {
      const lapangan = await db.find()
      return lapangan
    } catch (err) {
      throw new Error(err)
    }
}
module.exports = { 
    createLapangan,
    updateKetersediaan,
    getAllLapangan
 }