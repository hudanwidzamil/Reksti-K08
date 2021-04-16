const { 
    createLapangan 
 } = require("../helper/lapangan.helper")

//create user baru
exports.createLapangan = (req, res) => {
    console.log(
        req.body.lapangan_id,
        req.body.luas_lapangan,
        req.body.hargasewa,
        req.body.jamtersedia,
        req.body.ketersediaan
        )
    if (
        req.body.lapangan_id &&
        req.body.luas_lapangan &&
        req.body.hargasewa &&
        req.body.jamtersedia &&
        req.body.ketersediaan
        
    ) {
        createLapangan(
            req.body.lapangan_id,
            req.body.luas_lapangan,
            req.body.hargasewa,
            req.body.jamtersedia,
            req.body.ketersediaa
        )
        .then(
            result => {
                res.status(201).json({
                    "message" : 'Lapangan created!'
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
