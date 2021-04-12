const app = require('./app')
require('dotenv').config()

// Server
app.listen(8000, function () {
  console.log(
    `Server started on port 8000 ! Visit http://localhost:8000/`
  )
})
