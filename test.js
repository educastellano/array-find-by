var test = require('tape');
var findBy = require('./index')
    
if (!Array.prototype.findBy) {
    Array.prototype.findBy = findBy
}

var planets = [{id: 1, name: 'Saturn'}, {id: 2, name: 'Jupiter'}, {id: 3, name: 'Uranus'}]

test('it should find by attribute of number type', function (t) {
    var jupiter = planets.findBy('id', 2)
    t.equals(jupiter, planets[1])
    t.end();
});

test('it should find by attribute of string type', function (t) {
    var uranus = planets.findBy('name', 'Uranus')
    t.equals(uranus, planets[2])
    t.end();
});

test('it should return null if not found', function (t) {
    var pluto = planets.findBy('name', 'Pluto')
    t.equals(pluto, null)
    t.end();
});