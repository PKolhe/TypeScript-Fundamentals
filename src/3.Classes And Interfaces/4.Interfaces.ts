interface IEngine {
    start(callback: (startStatus:boolean, engineType:string) => void) : void;
    stop(callback: (stopStatus:boolean, engineType:string) => void) : void;
}

interface IAutoOptions {
    engine: IEngine;    // Using an Interface as a type
    basePrice: number;
    state: string;
    make?: string;  // ? represents Optional parameter
    model?:string;
    year?: number
}

interface ITruckOptions extends IAutoOptions {
    bedLenght? : number;
    fourbyfour: true;
}

class EngineTest implements IEngine {
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

class CustomEngine implements IEngine {
    start(callback: (startStatus:boolean, engineType:string) => void) {
        window.setTimeout(()=> {
            callback(true, "Custom Engine");
        }, 1000);
    }

    stop(callback: (stopStatus:boolean, engineType:string) => void) {
        window.setTimeout(()=> {
            callback(true, "Custom Engine");
        }, 1000);
    }
}

class AutoTest {
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    state: string;
    model:string;
    year: number;
    accessoryList: string

    constructor(basePrice:number, engine: IEngine, make: string, model:string, state: string, year: number){
        this._basePrice = basePrice;
        this._engine = engine;
        this.make = make;
        this.model = model;
        this.year = year;
        this.state = state;
    }

    calculateTotal():number {
        var taxRate = 0.8;
        return this._basePrice + (taxRate * this._basePrice)
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for(var i=0; i< accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryno + ' ' + ac.title + '<br/>';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    getBasePrice(): number {
        return this._basePrice;
    }

    setBasePrice(value:number) {
        if(value <=0) { throw "Price must be > 0";}
        this._basePrice = value;
    }

     getEngine(): IEngine {
        return this._engine;
    }

    setEngine(value:IEngine) {
        if(value == undefined) { throw "Please supply Engine";}
        this._engine = value;
    }
}

window.onload = function() {
    var auto = new AutoTest(4000, new CustomEngine(), 'Make', 'Model', 'AZ', 2010);
    var myEngine = <EngineTest> auto.getEngine();   // IEngine casting to EngineTest 
    alert(myEngine.horsePower.toString());

    var truck = new Truck(4000,new EngineT(300, 'V8'), 'Chevy', 'Silverado', 'Long Bed', true);
    //alert(truck.getEngine().engineType);
    //alert(truck.bedLength);
    //alert(truck.calculateTotal().toString());

    truck.addAccessories(new Accessory(1234, 'SunRoof'), new Accessory(3456, 'Towing Package'));
    truck.getEngine().start((status:boolean, engineType:string) => {
        alert(engineType + ' was started');
    });
    console.log(truck.getAccessoryList());
}


/*
    Interfaces :

        *   Interfaces provide a way to define a "contract" thast other objects must implement.
        *   If we have a set of objects that needed to implement similar behaviour across the objects
            such that they all have start & stop function. The one way is we can use interfaces to maintain this
            consistency.
        Example:
            A factory object requires that all engine being built have a standard "interface":
                Engine1: Start() & Stop()
                Engine2: Start() & Stop()
                Engine3: Start() & Stop()
            So any Engine class which will implemnt factory object will have thses start() & stop() behaviour.
        *   Interfcaes provide Code Contract.

    Interface Extension :

        

*/