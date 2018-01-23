"use strict";
var SomeBaseClass = /** @class */ (function () {
    function SomeBaseClass(name) {
        this.name = name;
    }
    SomeBaseClass.prototype.printName = function () {
        console.log(this.name);
    };
    return SomeBaseClass;
}());
var myobj = new SomeBaseClass("divya");
myobj.name = "yay";
myobj.printName();
//# sourceMappingURL=lib.js.map