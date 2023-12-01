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