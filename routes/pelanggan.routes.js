var express = require('express');
var router = express.Router();
const controller = require('../controller/pelanggan.controller')


module.exports= router.post('/pelanggan/create',controller.createUser)
module.exports= router.get('/pelanggan/:username/:password/login',controller.loginPelanggan)
module.exports= router.delete('/pelanggan/delete',controller.deleteUser)
// module.exports= router.put('/user/updateSaldo',controller.addSaldoUser)
