var express = require('express');
var router = express.Router();
const controller = require('../controller/admin.controller')


module.exports= router.post('/admin/create',controller.createAdmin)
// module.exports= router.get('/user/:nim/:nama/getSaldo',controller.getSaldoUser)
module.exports= router.delete('/admin/delete',controller.deleteAdmin)
// module.exports= router.put('/user/updateSaldo',controller.addSaldoUser)
