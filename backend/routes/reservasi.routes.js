var express = require('express');
var router = express.Router();
const controller = require('../controller/reservasi.controller')


module.exports= router.post('/reservasi/create',controller.createReservation)
// module.exports= router.get('/pelanggan/login',controller.loginPelanggan)
// module.exports= router.delete('/pelanggan/delete',controller.deleteUser)
module.exports= router.get('/reservasi/getall',controller.getResevation)
// module.exports= router.put('/user/updateSaldo',controller.addSaldoUser)
