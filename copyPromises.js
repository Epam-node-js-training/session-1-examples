var fs = require('fs')
var q = require('q')

exports.copyFile = function (source, destination, next) {
    var readFile = q.denodeify(fs.readFile)
    var writeFile = q.denodeify(fs.writeFile)

    readFile(source)
        .then(function (data) {
            return writeFile(destination, data)
        })
        .then(function () {
            console.log("Copied %s to %s", source, destination)
            next(null)
        })
        .catch(next)
        .done()
}

