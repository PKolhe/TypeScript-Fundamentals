/// <reference path="shapes.ts" />
/// <reference path="utils.ts" />
//Wrapper will pull variables below out of the global scope
(function () {
    var log = new Utils.Logger(Utils.LoggerMode.Toastr);
    var p = new Shapes.Point(3, 4);
    var dist = p.getDist();
    log.write("distance = " + dist);
    console.log("distance = " + dist);
    var rect = new Shapes.Rectangle(10, 4);
    var perimeter = rect.getPerimeter();
    log.write("perimeter = " + perimeter);
    console.log("perimeter = " + perimeter);
})();
/*

    Seperation of internal Modules -

        * Each file should contain only one namespace. and the file name should
          be the namespace/module name .ts Ex. shapes.ts and utils.ts
        * we can reference the namespace/modules using <reference path ="" >
        * We can export class using export keyword.

 */ 
