var fs = require('fs')
var async = require('async')

exports.copyFile = function (source, destination, next) {
    async.waterfall([
        function (next) {
            fs.readFile(source, next)
        },
        function (data, next) {
            fs.writeFile(destination, data, next)
        },
        function (next) {
            console.log("Copied %s to %s", source, destination)
            next(null)
        }
    ],
    next)
}

