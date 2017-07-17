/// <reference path="../typings/toastr.d.ts" />
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
    return Point;
}());
var p = new Point(3, 4);
var dist = p.getDist();
toastr.info("distance = " + dist);
/* An Internal Module */
/// <reference path="../typings/toastr.d.ts" />
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () { return this.height * this.width; };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var MyProgram;
(function (MyProgram) {
    function run() {
        var rect = new Shapes.Rectangle(10, 4);
        var area = rect.getArea();
        toastr.info("area = " + area);
    }
    run();
})(MyProgram || (MyProgram = {}));
/*

    *   Modules helps us keeps seperation in our code.
    *   We might have one module which handles data access, other hanldes UI Integration and
        the other might do animations.
    *   By seperating our code we get lots of feature like testability, and Reusability.
        - Reusable
        - Maintainable
        - Seperated
        - Testable
    * Earlier versions of TypeScript before 1.5 uses module keyword while newer one use namespace.

    *   Explicitely declare a module -
            module dataService {
                // Code
            };
    *   No module declarations, no import, no exports -
            class TestClass implements ITest {
                private a =2;
                public b = 4;
            };
            var obj = new TestClass();

            TestClass is the global module, global namespace i.e. Window.
            So obj object is a part of global namespace.
    *   Modules are flexible -
        * Extend modules - custom modules or global module, we can extend modules in or across files.
        * Seperation of conerns.
        * Modules are Open - we can import other modules, Export features.
    *
        An Internal Module
            * An Internal Module can be any local or exported member of another module and that might be
              a module in the global modules.
        
        Exporting a Internal Module
            * We can not access module members outside of the module.
            * To make module members accessible outside module, we need to export it.
        
    *   When we create module in Typescript it actually emits the javascript IIFE.
            (function() {
                console.log('Hello');
            })();

            Refer IIFE () gets created for modules in .js compiled file.
    *   
        

 */ 
