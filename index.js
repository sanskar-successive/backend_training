import { add, div, mult, sub } from "./lib/math.js";
import fs from "fs";

const args = process.argv;
const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);
let result;
const addition = add(num1,num2);
const subtraction = sub(num1,num2);
const multiplication = mult(num1,num2);
const division = div(num1,num2);
console.log(addition);
console.log(subtraction)
console.log(multiplication)
console.log(division)

switch (operation) {
  case "add":
    result = add(num1, num2);
    break;
  case "sub":
    result = sub(num1, num2);
    break;
  case "mult":
    result = mult(num1, num2);
    break;
  case "div":
    result = div(num1, num2);
    break;
  default:
    break;
}

const exists = fs.existsSync("./Math_operation.csv");
let data;

if (exists) {
  data = `${operation},${num1},${num2},${result}\n`
} else {
  data = `opeartion,num1,num2,result\n${operation},${num1},${num2},${result}\n`;
}

fs.appendFile("Math_operation.csv", data, (err) => {
  if (err) {
    console.log(err, "rejected");
  } else {
    console.log("success");
  }
});