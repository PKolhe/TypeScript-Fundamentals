var table = document.createElement('table'); //This fails
var table = document.createElement('table'); //This succeeds
var Calculator1 = (function () {
    function Calculator1(xId, yId, outputId) {
        this.x = document.getElementById(xId);
        this.y = document.getElementById(xId);
        this.output = document.getElementById(outputId);
        this.wireEvents();
    }
    Calculator1.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = (_this.add(parseInt(_this.x.value), parseInt(_this.y.value))).toString();
        });
        document.getElementById('Substract').addEventListener('click', function (event) {
            _this.output.innerHTML = (_this.substract(parseInt(_this.x.value), parseInt(_this.y.value))).toString();
        });
    };
    Calculator1.prototype.add = function (no1, no2) {
        return no1 + no2;
    };
    Calculator1.prototype.substract = function (no1, no2) {
        return no1 - no2;
    };
    return Calculator1;
}());
window.onload = function () {
    var calc = new Calculator1('X', 'Y', 'Output');
};
/*
    Casting or Converting between types :

Casting Types

var table:HTMLTableElement = document.createElement('table');  //This fails
var table:HTMLTableElement = <HTMLTableElement>document.createElement('table');  //This succeeds
                                    |
                            Cast HTMLElement to HTMLTableElement

Type Definition Files

     As you work with the DOM or other libraries you need a Type Definition file (*.d.ts file)
     lib.d.ts file is built-in out of the box for the DOM and JavaScript
     Additional Type Definition files for 3rd party scripts can be found at:
        https://github.com/borisyankov/DefinitelyTyped
        http://definitelytyped.org/


 */ 
