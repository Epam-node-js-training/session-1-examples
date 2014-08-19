var fs = require('fs')

exports.copyFile = function (source, destination, next) {
    fs.readFile(source, function (err, data) {
        if (err)
            return next(err)

        fs.writeFile(destination, data, function(err) {
            if (!err)
                console.log("Copied %s to %s", source, destination)

            next(err)
        })
    })
}

