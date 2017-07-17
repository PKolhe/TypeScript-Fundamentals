class Engine {
    
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

    constructor(public horsePower: number, public engineType: string) {

    }
}

class Car {
    private _engine: Engine;

    constructor(engine: Engine) {
        this._engine = engine;
    }

    //getEngine(): Engine {
    //    return this._engine;
    //}

    //setEngine(value:Engine) {
    //    if(value == undefined) {
    //        throw "Please provide Engine";
    //    }
    //    this._engine = value;
    //}
    
    getEngine(): Engine {
        return this._engine;
    }

    setEngine(value:Engine) {
        if(value == undefined) {
            throw "Please provide Engine";
        }
        this._engine = value;
    }

    start() {
        alert('Car Engine Started '+ this._engine.engineType);
    }
}

window.onload = function() {
    var car = new Car(new Engine(1200, 'V8') );
    car.start();
    car.setEngine(new Engine(1500, 'M5'));
    car.start();
}

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
    
    * get/ set Properties Limitations :
        * To use get/set properties we need to mention target:es5 property into tsconfig.json file
        * get/set properties won't work in every browser once javascript is generated.
        * These are specifically an ECMAScript 5 feature and we're talking about IE6, 7 & 8
          it won't work. It do works in latest browsers.
        * If we need to overcome these things we can use getter/setter methods instead of properties.

*/