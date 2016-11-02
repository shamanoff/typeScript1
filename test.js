"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.theName = name;
    }
    Animal.prototype.eat = function (food) {
        console.log("eating" + food);
    };
    ;
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        _super.call(this, name);
        this.name = name;
    }
    Dog.prototype.voice = function (voice) {
    };
    ;
    Dog.prototype.eat = function (food) {
    };
    ;
    return Dog;
}(Animal));
exports.Dog = Dog;
//# sourceMappingURL=test.js.map