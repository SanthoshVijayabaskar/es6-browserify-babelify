(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _anotherModule = require('./modules/another-module');

var _anotherModule2 = _interopRequireDefault(_anotherModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_anotherModule2.default); // Exporting default from the module

console.log(_anotherModule2.default.init());

},{"./modules/another-module":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    theProperty: 'import property returned',
    theFunction: function theFunction() {
        return 'the function returns this string';
    }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _aModule = require('./a-module');

var _aModule2 = _interopRequireDefault(_aModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    init: function init() {
        // Returns a property of an imported module
        return _aModule2.default.theProperty;
    }
}; // Imports another module

},{"./a-module":2}]},{},[1]);
