# Array.prototype.findBy

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
    let planets = [{id: 1, name: 'Saturn'}, {id: 2, name: 'Jupiter'}, {id: 3, name: 'Uranus'}]
    let [jupiter, index] = planets.findBy('id', 2)
    // jupiter -> {id: 2, name: 'Jupiter'}
    // index   -> 1
```
## Changelog

* 2.0.0 
    * It returns now the index too.

* 1.0.0 
    * Initial release :tada:

## License

[ISC License](http://opensource.org/licenses/ISC)
