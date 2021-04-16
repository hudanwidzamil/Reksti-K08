require('dotenv').config()
const mongoose = require('mongoose')
const db = require('../models/lapangan.models')

const createLapangan = async (lapangan_id, luas_lapangan, hargasewa, jamtersedia, ketersediaan) => {
    try {
        const result = db.create({
            lapangan_id : lapangan_id,
            luas_lapangan : luas_lapangan,
            hargasewa: hargasewa,
            jamtersedia: jamtersedia,
            ketersediaan: ketersediaan
        })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = { 
    createLapangan
    // getPelanggan
 }