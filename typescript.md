## BASIC TYPES IN TYPESCRIPT

TypeScript supports some simple types (primitives) you may know.

There are three main primitives in JavaScript and TypeScript.

- boolean - true or false values
- number - whole numbers and floating point values
- string - text values like "TypeScript Rocks"

There are also 2 less common primitives used in later versions of Javascript and TypeScript.

- bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
- symbol are used to create a globally unique identifier.

## Type Assignment

When creating a variable, there are two main ways TypeScript assigns a type:

- Explicit
- Implicit

## Explicit Type

**Explicit** - writing out the type:

**let** **firstName: string =** **"Dylan"**;

**Explicit** type assignment are easier to read and more intentional.

## Implicit Type

**Implicit** - TypeScript will "guess" the type, based on the assigned value:

**let** **firstName =** **"Dylan"**;

**Note:** Having TypeScript "guess" the type of a value is called **infer** .

# TypeScript Special Types

TypeScript has special types that may not refer to any specific type of data.

## Type: any

any is a type that disables type checking and effectively allows all types to be used.

## Type: udefined and null

undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

## VARIABLES IN TYPESCRIPT

**Variable:** Variable is a named place in memory where some data/value can be stored. According to the word variable, it can be said that the value of a variable can be changed/vary. While declaring a variable, some rules have to be followed:

- Variable names can contains alphabets both Upper-case as well as Lower-case and digits also.
- Variable name cant start with digit.
- We can use **\_** and **$** special character only, apart from these other special characters are not allowed.

**Variable declaration:** We can declare a variable in multiple ways like below:

- var Identifier:Data-type = value;
- var Identifier: Data-type;
- var Identifier = value;


## Clases In Typescript:

Classes provides a blueprint for creating objects with properties and methods, enabling the organization of code into reusable and structured components.

### Class Declaration

A class in TypeScript is declared using the class keyword, followed by the class name.
typescriptCopy code
class ClassName {
// Class members go here
}

### Constructor

The constructor is a special method used for initializing instances of the class. It is defined using the constructor keyword.
typescriptCopy code
class MyClass {
constructor(parameter1: type1, parameter2: type2) {
// logic here
}
}

### Properties"

Class properties define the characteristics or attributes of instances. They are declared within the class body.
typescriptCopy code
class Person {
name: string;
age: number;
}

### Inheritance:

Inheritance allows a class to inherit properties and methods from another class, establishing a hierarchical relationship.
typescriptCopy code
class Animal {
sound: string;

makeSound(): void {
console.log(this.sound);
}
}

class Dog extends Animal {
constructor() {
super();
this.sound = 'Woof';
}
}

## TypeScript Interfaces

Interfaces in TypeScript define a contract for the shape of an object, specifying the properties and methods it must have.
Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

### Interface Declaration:

An interface is declared using the interface keyword, followed by the interface name.
interface MyInterface {
// Interface members go here
}

### Properties:

Interface properties define the expected attributes of an object.
typescriptCopy code
interface Person {
name: string;
age: number;
}

### Readonly Properties:

Properties can be marked as readonly, indicating that once assigned a value, they cannot be changed.
typescriptCopy code
interface Point {
readonly x: number;
readonly y: number;
}

### Extending Interfaces:

Interfaces can extend other interfaces to inherit their members.
typescriptCopy code
interface Shape {
color: string;
}

interface Square extends Shape {
sideLength: number;
}

### Implementing Interfaces:

Classes in TypeScript can implement interfaces, ensuring they provide the required properties and methods.
typescriptCopy code
interface Animal {
makeSound(): void;
}

class Dog implements Animal {
makeSound() {
console.log('Woof');
}
}