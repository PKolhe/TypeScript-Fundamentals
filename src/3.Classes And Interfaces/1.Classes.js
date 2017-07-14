var Engine = (function () {
    /*horsePower: number;
     engineType: string;

     constructor(horsePower: number, engineType: string) {
         this.horsePower = horsePower;
         this.engineType = engineType;
    }*/
    /* above constructor and fields does the same work as below constrcor is doing.
        if we declare parameter public in constructor, it does field declaration
        as well as initialisation part.
    */
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined) {
                throw "Please provide Engine";
            }
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Car Engine Started ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car(new Engine(1200, 'V8'));
    car.start();
    car.engine = new Engine(1500, 'M5');
    car.start();
};
/*
Classes -

    * Classes are just a Containers.
        The Role of a class in Typescript is to encapsulate code such as functions or variables
        into reusable containers that we can use throughout application.
    * In Javascript ES5 or earlier versions does not support Classes, We can reveal classes
        using Prototype Patterns, Module Patterns etc..
    
    * Class Members -
        a) Fields
        b) Constructors
        c) Properties
        d) Functions

    * Classes acts like container to encapsulate code.
        Example :
                class Car {
                    // Fields
                    
                    // Constructors

                    // Properties

                    // Functions
                }
    * Constructors are used to initialised fields.
    * Class members are public by default.
    * Properties act as filters and can have get or set blocks.
    * Types are instantiated using new keyword.


*/ 
