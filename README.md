# Array.prototype.findBy

Finds an element in an array of objects by attribute.

# Install

    npm install array-find-by --save

# Usage

Import it:
```js
    import findBy from 'array-find-by'
    
    let planets = [{id: 1, name: 'Saturn'}, {id: 2, name: 'Jupiter'}, {id: 3, name: 'Uranus'}]

```
Call it...

```js
    let [jupiter, index] = findBy.call(planets, 'id', 2)
    // jupiter -> {id: 2, name: 'Jupiter'}
    // index   -> 1
```

...or add it on the prototype:

```js
    if (!Array.prototype.findBy) {
        Array.prototype.findBy = findBy
    }

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
