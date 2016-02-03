# find-by

Finds an element in an array of objects by attribute.

# Usage

Import it:
```js
    import findBy from 'find-by'
    
    if (!Array.prototype.findBy) {
        Array.prototype.findBy = findBy
    }
```

Use it:
```js
    var planets = [{id: 1, name: 'Saturn'}, {id: 2, name: 'Jupiter'}, {id: 3, name: 'Uranus'}]
    var jupiter = planets.findBy('id', 2)
```
## Changelog

* 1.0.0 
    * Initial release :tada:

## License

[ISC License](http://opensource.org/licenses/ISC)
