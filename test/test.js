
const Express = require('express')
const ExpressPam = require('../lib/index.js')
const app = Express()

app.use(ExpressPam('Test authentification', 'ubuntu'))

app.use('/', (req, res) => res.send('test'))

app.listen(8054, () => console.log('Web service start on port 8054'))
