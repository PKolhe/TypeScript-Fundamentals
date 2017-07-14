class EngineT {
    constructor(public horsePower:number, public engineType: string) {
    }

    start(callback: (startStatus:boolean, engineType:string) => void) {
        window.setTimeout(()=> {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus:boolean, engineType:string) => void) {
        window.setTimeout(()=> {
            callback(true, this.engineType);
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryno:number, public title: string) {
    }
}

class Auto {
    private _basePrice: number;
    private _engine: EngineT;
    make: string;
    model:string;
    accessoryList: string

    constructor(basePrice:number, engine: EngineT, make: string, model:string){
        this._basePrice = basePrice;
        this._engine = engine;
        this.make = make;
        this.model = model;
    }

    }
}

/*
    Extending Types :
                            Auto
                          
                    Truck           SUV

    Truck class extends Auto
    SUV class extends Auto

    * extending types is the functionality of inheriting from that base class and to make a child class.
    * Javascript does not natively support (ES5 & earlier versions) the concept of inheritance.
      However, we can do it using Javascript Prototyping.
    * Types can be extended using extends keyword.
    * Child class constructor must call parent class(super) constructor.

    


 */