function User(name) {
    this.name = name
}

User.prototype.greet = function (other) {
    console.log('Hello %s, my name is %s', other.name, this.name)
}

global.User = User
