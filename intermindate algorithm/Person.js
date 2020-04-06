
/**
 * DON'T do OOP in this way when in production!
 * This person object is the way it was is because the requirement of the test:
 * Object.keys(bob).length should return 6.
 * 
 * and this are the method that require:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * @param {*} firstAndLast 
 */
var Person = function (firstAndLast) {
    var name = firstAndLast;

    this.getFullName = function () {
        return name;
    };

    this.getFirstName = function () {
        return name.split(' ').shift();
    }

    this.getLastName = function() {
        return name.split(' ').pop();
    }

    this.setFirstName = function(first) {
        name = first + ' ' + this.getLastName();
    }

    this.setLastName = function(last) {
        name = this.getFirstName() + ' ' + last;
    }

    this.setFullName = function(firstAndLast) {
        name = firstAndLast;
    }
};