import lodash from 'lodash'

const add = (num1,num2)=>{
    return lodash.add(num1, num2);
}
const sub = (num1,num2)=>{
    return lodash.subtract(num1, num2);
}
const mult = (num1,num2)=>{
    return lodash.multiply(num1, num2);
}
const div = (num1,num2)=>{
    return lodash.divide(num1, num2);
}
export {add, sub, mult, div}
