var data:any;   // type any
var info;       // type any

var age: number = 31;   //type number
var salary: number = 10.5; // type number
var sal = 30.5; // This is Type Inference; type number;

var isAccess: boolean = true;   // type boolean
var isReady = false;    // Type Inference; Type Boolean;

var firstname: string = "Pankaj";    // type string
var lastName = "Harish";    // Type Inference; Type string

var names: string[] = ['one','Two', 'Three'];
var firstPerson1: string;
firstPerson1 = names[0];     // Indexer

var num: number = null;
var names1: string = null;
var isReady1: boolean = null;
var customer:{} = null;

var age:number;     // Type number but value is undefined
var customer1 = undefined;  // Type any but value is undefined

var isbald = function() {
    return 'yes';
}

var isHair = !!isbald;  // applying !! to a value will return boolean true or false in javascript.

function getArrayLength1(x: string[]) {
    var len: number = x.length;
    return len;
}

var myOBj = {a:10, b:20}; // Object Literals; used to define objects
var points: Object = {x:10, y:20};      // Type Object
var rectangle = {
    h: 10,
    w: 20,
    calcArea: function() {
        return this.h * this.w;
    }
}

var squareIt = function(
    rect: { h:number, w?:number }){     // ? reprresents parameter is optional
}

var multiply = function(x: number) {
    return x * x;
}

//Arrow Function Expressions
var multiplyArrow = (h:number, w:number) => h * w; 

var multiplyMore: Function; // Type Function; used to defined objects
multiplyMore = function(x: number) {
    return x * x;
}

var greetMe1: (msg: string) => void    // does not return any value
greetMe1 = function(msg) {
    console.log(msg);
}

var helloWorld1: (name?: string) => void
helloWorld1 = function(name?:string) {
    console.log('Hello '+ (name || 'unknown person'))
}
helloWorld1();
helloWorld1('Pankaj');

var squareIt1: (rect: { h:number; w?: number;}) => number;   // Arrow Functionas which takes object lieteral as parameter

squareIt1 = function(rect) {
    if(rect.w === undefined) {
        return rect.h * rect.h;
    }
    return rect.h * rect.w;
}

console.log(squareIt1({ h:10, w:20 }));
console.log(squareIt1({ h:10 }));

// Use of Interface
interface SquareFunction {
    (x: number): number;
}
//var squareItBasic:SquareFunction = (num, foo) => num * num;  //Error does not match interface signature
var squareItBasic:SquareFunction = (num: number) => num * num;

interface Rectangle {
    h:number, w?: number;
}
var squareIt2: (rect: Rectangle) => number;   // Arrow Functionas which takes object lieteral as parameter

squareIt2 = function(rect) {
    if(rect.w === undefined) {
        return rect.h * rect.h;
    }
    return rect.h * rect.w;
}

console.log(squareIt2({ h:10, w:20 }));
console.log(squareIt2({ h:10 }));

interface Person {
    name: string;
    age?: number;
    kids: number;
    calcPets: () => number;
    makeYounger: (years: number) => void;
    greet: (msg: string) => string;
}

var p:Person = {
    name:"Pankaj",
    age:30,
    kids:2,
    calcPets: function() {
        return this.kids * 2;
    },
    makeYounger: function(years: number) {
        return this.age -= years;
    },
    greet: function(str: string) {
        return "Hello" + str;
    }
};

var pets = p.calcPets();
console.log(pets);

p.makeYounger(5);
console.log(p.age);

var greet = p.greet('Pankaj');
console.log(greet);


/* Primitive Data Types

    * any
    * number
    * string
    * boolean
    * null type we can use on any Primitive types.null type is subtype of all primitive types except 
      void and undefined.
    * undefined type is subtype of all types.
    * Object Types: 
        Some of the ways which can defined objects in typescript -
            Functions, Class, module, interface, literal types etc..

    * When there is no Type Annotations. Type will be inferend as any.
    * ? is used to declare optional parameter.
    * applying !! to a value will return boolean true or false in javascript.

    Functions :

        * Parameter Types : 
             required and optional
        *  Arrow function expressions 
                  Compact form of function expressions 
                  Omit the function keyword 
                  Have scope of “this” 
        * Void 
              Used as the return type for functions that return no value 

 */