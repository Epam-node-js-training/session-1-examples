var fs = require('fs')

exports.copyFile = function (source, destination, done) {
    try {
        var data = fs.readFileSync(source)
        fs.writeFileSync(destination, data)
        console.log("Copied %s to %s", source, destination)
    } catch (err) {
        done(err)
    }

    done(null)
}

