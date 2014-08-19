var fs = require('fs')
var async = require('async')

exports.copyFile = function (source, destination, next) {
    var write = function (data, next) {
        fs.writeFile(destination, data, next)
    }

    var done = function (next) {
        console.log("Copied %s to %s", source, destination)
        next(null)
    }

    async.compose(done, write, fs.readFile)(source, next)
}

