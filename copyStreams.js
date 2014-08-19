var fs = require('fs')

exports.copyFile = function (source, destination, next) {
    var from = fs.createReadStream(source)
        .on('end', function() {
            console.log("Copied %s to %s", source, destination)
            next(null)
        })
        .on('error', next)

    var to = fs.createWriteStream(destination)
        .on('error', next)

    from.pipe(to)
}

