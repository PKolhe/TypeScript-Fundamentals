
var table:HTMLTableElement = document.createElement('table');  //This fails
var table:HTMLTableElement = <HTMLTableElement>document.createElement('table');  //This succeeds

class Calculator {
    private x: HTMLInputElement;
    private y: HTMLInputElement;
    private output: HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.output = <HTMLSpanElement>document.getElementById(outputId);
        this.wireEvents();
    }

    wireEvents() {
        document.getElementById('Add').addEventListener('click', event=> {
            this.output.innerHTML = (this.add(parseInt(this.x.value), parseInt(this.y.value))).toString();
        });

        document.getElementById('Substract').addEventListener('click', event=> {
            this.output.innerHTML = (this.substract(parseInt(this.x.value), parseInt(this.y.value))).toString();
        });
    }

    add(no1: number, no2: number) {
        return no1 + no2;
    }

    substract(no1: number, no2: number) {
        return no1 - no2;
    }
}

window.onload = function() {
    var calc = new Calculator('X', 'Y', 'Output');
}

/*
    Casting or Converting between types :

Casting Types

var table:HTMLTableElement = document.createElement('table');  //This fails
var table:HTMLTableElement = <HTMLTableElement>document.createElement('table');  //This succeeds
                                    |
                            Cast HTMLElement to HTMLTableElement

Type Definition Files

     As you work with the DOM or other libraries you need a Type Definition file (*.d.ts file)
     lib.d.ts file is built-in out of the box for the DOM and JavaScript
     Additional Type Definition files for 3rd party scripts can be found at:
        https://github.com/borisyankov/DefinitelyTyped
        http://definitelytyped.org/


 */