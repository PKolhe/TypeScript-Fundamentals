var typesDemo;
(function (typesDemo) {
    var person;
    person = "Pankaj K";
    console.log(person.substring(1, 3));
    person = {
        firstName: "Pankaj",
        lastName: "Kolhe",
        age: 31
    };
    console.log(person.substring(1, 3));
})(typesDemo || (typesDemo = {}));
/*

* In TypeScript, if you get static typing, you can actually make it optional.
* In Javascript, We can use Dynamic typing, we can use dynamic typing in javascript and use it as it
  is in TypeScript which also works.
    Example:
        var person; // could be of any type.
        person = "Pankaj Kolhe";    // assigning type dynamically.
        person.substring(1,4);

        person = 1;     // this number value got set in between
        person.substring(1,3);  // Uncaught TypeException
    
    These kind of Errors can get caught in TypeScript, Hence it supports static typing.

* In TypeScript, Type Safty is compile time feature.
* In Javascript, Type Safty happens at runtime debugging.

Ambient Declarations:

    In TypeScript:

        declare var document;
        document.title = "My Title";    // this is on the DOM
    
    * declare is the special word in Typescript that creates an ambient declarations, So this variable
      "var document"" is going to be something that is referred to and we don't have it in our file.
      In this case, it is lib.d.ts file which is referenced by default by TypeScript.
      and it contains things about the DOM, and Javascript itself just like document.
      So we can use document.title, and typescript knows that it is string.
    * Ambient declarations do not appear anywhere in the Javascript.
    * Ambient declarations also work with third party libraries like JQuery, Knowkout.js etc..





    

*/ 
