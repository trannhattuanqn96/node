const express = require('express')
const app = express()
const port = 1360

app.get('/', (req, res) => {
  res.send('tuaasn tranr!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})