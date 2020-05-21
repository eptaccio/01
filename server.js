const { config } = require('./config')
const bodyPaser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyPaser.json())

app.get('/status', (_req, res) => res.send('ok'))

app.listen(config.APP_PORT, _ => {
  console.log(`listening on ${config.APP_PORT}`)
})