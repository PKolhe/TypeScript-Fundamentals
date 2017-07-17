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

     getEngine(): EngineT {
        return this._engine;
    }

    setEngine(value:EngineT) {
        if(value == undefined) { throw "Please supply Engine";}
        this._engine = value;
    }
}

class Truck extends Auto {
    bedLength:string;
    fourbyfour: boolean;

    constructor(basePrice:number, engine: EngineT, make: string, model:string,bedLength:string, fourbyfour: boolean) {
        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourbyfour = fourbyfour;
    }
}

window.onload = function() {
    var auto = new Auto(4000,new EngineT(300, 'V8'), 'Chevy', 'Silverado');
    alert(auto.getEngine().engineType);

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