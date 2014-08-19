var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    var u = url.parse(req.url, true)
    if ("message" in u.query) {
        res.end(u.query.message)
    } else {
        res.statusCode = 400
        res.end("No message in request")
    }
})

server.listen(8080)
