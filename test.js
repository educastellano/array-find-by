var test = require('tape');
var findBy = require('./index')
    
if (!Array.prototype.findBy) {
    Array.prototype.findBy = findBy
}

var planets = [{id: 1, name: 'Saturn'}, {id: 2, name: 'Jupiter'}, {id: 3, name: 'Uranus'}]

test('it should find by attribute of number type', function (t) {
    var _ = planets.findBy('id', 2),
        jupiter = _[0], 
        idx = _[1];
    t.equals(jupiter, planets[1]);
    t.equals(idx, 1);
    t.end();
});

test('it should find by attribute of string type', function (t) {
    var _ = planets.findBy('name', 'Uranus'),
        uranus = _[0], 
        idx = _[1];
    t.equals(uranus, planets[2])
    t.equals(idx, 2)
    t.end();
});

test('it should return [null, -1] if not found', function (t) {
    var _ = planets.findBy('name', 'Pluto'),
        pluto = _[0], 
        idx = _[1];
    t.equals(pluto, null)
    t.equals(idx, -1)
    t.end();
});


test('it should return [null, -1] if length is 0', function (t) {
    var _ = [].findBy('name', 'Pluto'),
        pluto = _[0], 
        idx = _[1];
    t.equals(pluto, null)
    t.equals(idx, -1)
    t.end();
});