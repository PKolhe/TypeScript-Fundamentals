/// <reference path="typings/toastr.d.ts" />
//Extending Internal modules
var App;
(function (App) {
    var Utils;
    (function (Utils) {
        Utils.LoggerMode = {
            Console: 1,
            Alert: 2,
            Toastr: 3
        };
        var Logger = (function () {
            function Logger(mode) {
                if (mode === void 0) { mode = Utils.LoggerMode.Console; }
                this.mode = mode;
                switch (this.mode) {
                    case Utils.LoggerMode.Console:
                        this.writer = function (msg) { return console.log(msg); };
                        break;
                    case Utils.LoggerMode.Alert:
                        this.writer = function (msg) { return alert(msg); };
                        break;
                    case Utils.LoggerMode.Toastr:
                        this.writer = function (msg) { return toastr.info(msg); };
                        break;
                }
            }
            Logger.prototype.write = function (msg) {
                this.writer(msg);
            };
            ;
            return Logger;
        }());
        Utils.Logger = Logger;
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
var Utils = App.Utils;
