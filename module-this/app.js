var user = require('./user')

var jack = new user.User('Jack')
var mike = new user.User('Mike')
jack.greet(mike)
