class MyCar {
    engine:string;
    constructor(engine:string) {
        this.engine = engine;
    }

    start() {
        alert('Engine Started:'+ this.engine);
    }
    stop() {
        alert('Engine Stoped:'+ this.engine);
    }
}

window.onload = function() {
    var car = new MyCar('V8');
    car.start();
    car.stop();
}