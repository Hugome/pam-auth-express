# pam-auth-express
PAM Authentification middleware for express

## How to use
```js
const ExpressPam = require('pam-auth-express')
app.use(ExpressPam(/* App name (realm) */, /* Forced user (Optional) */))
```

## Full example
```js
const Express = require('express')
const ExpressPam = require('pam-auth-express')
const app = Express()

app.use(ExpressPam('Test authentification', 'ubuntu'))

app.use('/', (req, res) => res.send('test'))

app.listen(8054, () => console.log('Web service start on port 8054'))
```