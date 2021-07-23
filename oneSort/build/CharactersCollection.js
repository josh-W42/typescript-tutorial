"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(_data) {
        this._data = _data;
        this.charArray = _data.split("");
    }
    Object.defineProperty(CharactersCollection.prototype, "data", {
        get: function () {
            return this.charArray.join("");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this._data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.charArray[leftIndex].toLowerCase() >
            this.charArray[rightIndex].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.charArray[leftIndex] = this.charArray[rightIndex];
        this.charArray[rightIndex] = leftHand;
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
