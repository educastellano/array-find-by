//  Taken from 'Array.prototype.includes' Polyfill: 
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
module.exports = function(attribute, searchElement /*, fromIndex*/ ) {
  'use strict';
  var O = Object(this);
  var len = parseInt(O.length) || 0;
  if (len === 0) {
    return [null, -1];
  }
  var fromIndex = parseInt(arguments[2]) || 0;
  var k;
  if (fromIndex >= 0) {
    k = fromIndex;
  } else {
    k = len + fromIndex;
    if (k < 0) {k = 0;}
  }
  var currentElement;
  while (k < len) {
    currentElement = O[k];
    if (typeof currentElement === 'object'  && 
        currentElement.hasOwnProperty(attribute) &&
          (searchElement === currentElement[attribute] ||
           searchElement !== searchElement && currentElement[attribute] !== currentElement[attribute]) // NaN !== NaN
        ) { 
      return [currentElement, k];
    }
    k++;
  }
  return [null, -1];
};

