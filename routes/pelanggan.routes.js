var express = require('express');
var router = express.Router();
const controller = require('../controller/saldo.controller')

// module.exports = app => {
//   app.use((req, res, next) => {
//     res.header(
//       'Access-Control-Allow-Headers',
//       'x-access-token, Origin, Content-type, Accept'
//     )
//     next()
//   })
//   //getusersaldo
//   app.get('/api/user', [], controller.getSaldoUser)
//   //createuser
//   app.post('/api/user', [], controller.createUser)
//   app.delete('/api/user', [], controller.deleteUser)
//   app.update('/api/user/saldo', [], controller.addSaldoUser)

// }

module.exports= router.post('/user/create',controller.createUser)
module.exports= router.get('/user/:nim/:nama/getSaldo',controller.getSaldoUser)
module.exports= router.delete('/user/delete',controller.deleteUser)
module.exports= router.put('/user/updateSaldo',controller.addSaldoUser)
