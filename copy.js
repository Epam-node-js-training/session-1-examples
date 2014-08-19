var copiers = [
    'copySync',
    'copyAsync',
    'copyStreams',
    'copyPromises',
    'copyWaterfall',
    'copyCompose'
]

var from = 'test.json'
var to = 'test.json.out'

copiers.forEach(function(moduleName) {
    var m = require('./' + moduleName)
    m.copyFile(from, to, function(err) {
        if (err)
            throw err
    })
})
