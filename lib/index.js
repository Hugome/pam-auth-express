const BasicAuth = require('basic-auth')
const Pam = require('authenticate-pam')

module.exports = function (appName, forcedUsername = undefined) {
    return function (req, res, next) {
        const auth = BasicAuth(req)
        if (!auth) {
            return askAuthentification(res, appName)
        }
        if (forcedUsername) {
            auth.name = forcedUsername
        }
        Pam.authenticate(auth.name, auth.pass, function (err) {
            if (err) {
                return askAuthentification(res, appName)
            } else {
                next()
            }
        })
    }
}

function askAuthentification (res, appName) {
    res.set('WWW-Authenticate', 'Basic realm=' + appName)
    return res.sendStatus(401)
}