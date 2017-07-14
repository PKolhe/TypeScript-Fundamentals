
/*
Why use TypeScript over Javascript ? 

    * Javascript language can feel messy, if we do not follow proper design patterns like module patterns, 
      prototype patterns. It results in lack of maintainability, lack of reuse of code.
     
      We want maintainable code, this is something TypeScript can do it.
      All Javascript is valid TypeScript.
    * Javascript provides dynamic Type System.
        The Good Things:
            1. Variable can hold any object.
            2. Types determined on the fly.
            3. Implicit type coercion (ex: string to number) 
 
         The Bad: 
            1. Difficult to ensure proper types are passed without tests.
            2. Not all developers use === 
            3. Enterprise-scale apps can have 1000s of lines of code to maintain.

    * Migrating from Server side apps to Client side apps is challenging for developers 
      who knwoes .NET, JAva, PHP etc.. TypeScript does learning easy for them and works as 
      alternate to Javascript.
    
    * Several TypeScript alternatives exist: 
              Write pure JavaScript  
              Apply JavaScript patterns 
              CoﬀeeScript – http://coﬀeescript.org 
              Dart – http://dartlang.org 

What is TypeScript?
   "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript"

Options:
    1. Works on any browser. Cross brower compatible.
    2. Works on Any host. because it is javascript it works on any host like nodejs etc.
    3. Works on any OS.
    4. Very good Tool Support.

TypeScript Features:

    * Supports standard JavaScript code.
    * Provides static Typing
    * Encapsulation through classes and modules 
    * Support for constructors, properties, functions 
    * Define interfaces => function support (lambdas) 
    * Intellisense  and syntax checking

TypeScript Compiler:

    TypeScript      =>      tsc abc.ts    => Javascript


TypeScript Syntaxt Rules :

    * TypeScript is a superset of JavaScript 
          Follows the same syntax rules: 
          { } brackets define code blocks 
          Semi-colons end code expressions 
          JavaScript keywords: 
              for 
              if 
              Many More.. 

Important Keywords and Operators:

    class - Container for members such as properties and functions 
    constructor - Provides initialization functionality in a class 
    exports - Export a member from a module 
    extends - Extend a class or interface 
    implements - Implement an interface 
    imports - Import a module 
    interface - Defines code contract that can be implemented by types 
    module / namespace - Container for classes and other code 
    public/private - Member visibility modifiers 
    …  - Rest parameter syntax  
    =>  - Arrow syntax used with definitions and functions 
    <typeName> - < > characters use to cast/convert between types 
    : - Separator between variable/parameter names and types 

Code Herirachy:

            Module/Namespace 
                 |
            Class --Interfaces
                 |
            Fields, Constructor, Properties, Functions 

Install TypeScript Compiler:

    npm install -g typescript
    npm install typescript --save


*/