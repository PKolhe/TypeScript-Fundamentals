/// <reference path="typings/toastr.d.ts" />

/* Global Module */

interface IPoint {
    getDist(): number;
}

class Point implements IPoint {
    constructor (public x: number, public y: number) { }
    getDist() { return Math.sqrt(this.x * this.x + this.y * this.y); }
}

var p1: IPoint = new Point(3, 4);
var dist1 = p1.getDist();
toastr.info("distance = " + dist1);

/// <reference path="typings/toastr.d.ts" />

namespace MyProgram {
    function run () {
        var rect: Shapes.IRectangle = new Shapes.Rectangle(10, 4);
        var area = rect.getArea();
        toastr.info("area = " + area);
    }
    run();
}


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
    
    *   When we create module in Typescript it actually emits the javascript IIFE.
            (function() {
                console.log('Hello');
            })();
    
    *   An Internal Module
            * An Internal Module can be any local or exported member of another module and that might be 
              a module in the global modules.
            * These are namespace like modules.
            * We use it for grouping code.
            * No need to import them.
        
    *   Exporting a Internal Module 
            * We can not access module members outside of the module.
            * To make module members accessible outside module, we need to export it.
            * Seperately loadable modules.
            * Exported entities can be imported into other modules.
                Ex. import viewmodels = require('./ViewModule');
            * CommonJS or AMD Conventions.
        
        Why External Modules ?
            * Sequencing script dependencies is very hard. We might have 40-50 modules 
              we need to load which is very difficult.
              
            AMD 
              1. Asynchrounous Module Definition :
                * Manage dependencies
                * Load Asynchrounously
              2. Load Module in Sequence :
                * Based on defined dependencies
                * Who requires who ?
              3. require.js

        Very Important -

            Kindly Refer How to import external modules using AMD.


    * 
        

 */