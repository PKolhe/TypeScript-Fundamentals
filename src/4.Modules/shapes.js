/* An Internal Module */
var App;
(function (App) {
    var Shapes;
    (function (Shapes) {
        var Rectangle = (function () {
            function Rectangle(height, width) {
                this.height = height;
                this.width = width;
            }
            Rectangle.prototype.getPerimeter = function () { return this.height * 2 + this.width * 2; };
            Rectangle.prototype.getArea = function () { return this.height * this.width; };
            return Rectangle;
        }());
        Shapes.Rectangle = Rectangle;
        var Point = (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            Point.prototype.getDist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
            return Point;
        }());
        Shapes.Point = Point;
    })(Shapes = App.Shapes || (App.Shapes = {}));
})(App || (App = {}));
var Shapes = App.Shapes;
