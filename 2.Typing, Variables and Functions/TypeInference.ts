
var any1;   //Type could be of any type. So in this case inference is that this could be any type at all.

var anyType: any;
/*Type Annotations.In TypeScript, there is a type "any", which is base type for all types.
So, we can set string, number or any type to this any typed variable.*/

var firstName = "Pankaj";
var lastName: string = "Kolhe";
var num1: number;
//Type Annotations. So we are using annotation here and we are not initialising anything.

var num1: number = 2;
//Type annotations with setting value.

var num2 = 3;   var num4 = num2 + 100;
//Type Inference ( number )

var num2 = 3;   var str = num2 + "Pankaj";
//Type Inference ( string )

//var nothappy: number = num1 + "Pankaj";       //Error. We can not do this.

function addNumbers(n1:number, n2:number, n3:number) {
    var result = n1 + n2 + n3;
    alert("Sum is " + result);
}

//addNumbers(num1, num2, lastName);     //Error
addNumbers(num1, num2, num2);

/*===================================================================================
  Annotations & Type Inference: 

        var num = 2;
            var - Declare it.
            num - Name it.
            2 - Set it.
In above statement, we are assigning num variable vaule to 2, it means num is set to type number.
So anywhere we use num, it will be treated as number.

        var num: number = 2;
            var - Declare it.
            num - Name it.
            : - Annote it.
            number - Type it.
            2 - Set it.
In above statement, We are assigning num variable value to 2. we are annoting variable to 
assign type as number.
Initialization is optional in above case. Initialized variable must match the annotated type.

Example - Refer above examples.

*/