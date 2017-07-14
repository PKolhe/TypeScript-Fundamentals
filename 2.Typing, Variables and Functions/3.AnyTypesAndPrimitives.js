var data; // type any
var info; // type any
var age = 31; //type number
var salary = 10.5; // type number
var sal = 30.5; // This is Type Inference; type number;
var isAccess = true; // type boolean
var isReady = false; // Type Inference; Type Boolean;
var firstname = "Pankaj"; // type string
var lastName = "Harish"; // Type Inference; Type string
var names = ['one', 'Two', 'Three'];
var firstPerson1;
firstPerson1 = names[0]; // Indexer
var num = null;
var names1 = null;
var isReady1 = null;
var customer = null;
var age; // Type number but value is undefined
var customer1 = undefined; // Type any but value is undefined
var isbald = function () {
    return 'yes';
};
var isHair = !!isbald; // applying !! to a value will return boolean true or false in javascript.
function getArrayLength1(x) {
    var len = x.length;
    return len;
}
var myOBj = { a: 10, b: 20 }; // Object Literals; used to define objects
var points = { x: 10, y: 20 }; // Type Object
var rectangle = {
    h: 10,
    w: 20,
    calcArea: function () {
        return this.h * this.w;
    }
};
var squareIt = function (rect) {
};
var multiply = function (x) {
    return x * x;
};
//Arrow Function Expressions
var multiplyArrow = function (h, w) { return h * w; };
var multiplyMore; // Type Function; used to defined objects
multiplyMore = function (x) {
    return x * x;
};
var greetMe1; // does not return any value
greetMe1 = function (msg) {
    console.log(msg);
};
var helloWorld1;
helloWorld1 = function (name) {
    console.log('Hello ' + (name || 'unknown person'));
};
helloWorld1();
helloWorld1('Pankaj');
var squareIt1; // Arrow Functionas which takes object lieteral as parameter
squareIt1 = function (rect) {
    if (rect.w === undefined) {
        return rect.h * rect.h;
    }
    return rect.h * rect.w;
};
console.log(squareIt1({ h: 10, w: 20 }));
console.log(squareIt1({ h: 10 }));
//var squareItBasic:SquareFunction = (num, foo) => num * num;  //Error does not match interface signature
var squareItBasic = function (num) { return num * num; };
var squareIt2; // Arrow Functionas which takes object lieteral as parameter
squareIt2 = function (rect) {
    if (rect.w === undefined) {
        return rect.h * rect.h;
    }
    return rect.h * rect.w;
};
console.log(squareIt2({ h: 10, w: 20 }));
console.log(squareIt2({ h: 10 }));
var p = {
    name: "Pankaj",
    age: 30,
    kids: 2,
    calcPets: function () {
        return this.kids * 2;
    },
    makeYounger: function (years) {
        return this.age -= years;
    },
    greet: function (str) {
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
