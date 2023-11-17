// const expenses = [
//     { category: 'Food', amount: 50 },
//     { category: 'Rent', amount: 1200 },
//     { category: 'Food', amount: 80 },
//     { category: 'Utilities', amount: 200 },

//   ];

//   const reducer = (acc, curr)=>{
//     const {category, amount} = curr;
//     acc[category] = amount;
//     return acc;
//   }
//   console.log(expenses.reduce(reducer, {}))

// const arr = [1,2,-3,4,-5,-6];

// const reducer = (acc, curr)=>{
//     if(curr>0) acc.push(curr*curr);
//     return acc;
// }

// console.log(arr.reduce(reducer, []))

// const arr = [[1, 2, 3], [4, 5], [6, 7, 8]];
// const reducer = (acc,curr)=>{
//     if(Array.isArray(curr)){
//         curr.forEach((item)=>{
//             acc.push(item)
//         })
//     }
//     else{
//         acc.push(curr);
//     }
//     return acc;
// }
// console.log(arr.reduce(reducer, []));
// const numbers = [1, 2, 3, 4, 5, 6];

// Outpcut should be: 56 (2^2 + 4^2 + 6^2)

// const reducer = (acc, curr)=>{
//     if(curr%2==0) acc += curr*curr;
//     return acc;
// }

// console.log(numbers.reduce(reducer, 0))

// const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' },
//     { name: 'David', grade: 'C' },
//   ];
//   // Output should be: { A: [Alice, Charlie], B: [Bob], C: [David] }
//   const reducer = (acc,curr)=>{
//     const {name, grade} = curr;
    
//     if(Object.hasOwn(acc, grade)){
//         acc[grade] = [...acc[grade], name]
        
//     }
//     else{
//         acc[grade] =[name]
//     }
//     return acc;
//   }
//   console.log(students.reduce(reducer, {}))

// const nestedData = [1, [2, [3, 4, { key: 5 }], 6], [7, 8]];

// Output should be: [1, 2, 3, 4, 5, 6, 7, 8]

// const array1 = [{ id: 1, value: 'A' }, { id: 2, value: 'B' }];
// const array2 = [{ id: 1, count: 3 }, { id: 2, count: 5 }];


// // Output should be: [{ id: 1, value: 'A', count: 3 }, { id: 2, value: 'B', count: 5 }]
// const reducer = (acc, curr)=>{
//     const {id, value} = curr;
//     const {count} = array2.find((item)=>item.id === id);
//     acc.push({id : id, value : value, count : count});
//     return acc;
// }
// console.log(array1.reduce(reducer, []))

// filter 
// Given a multidimensional array, filter out all subarrays that contain at least one negative number.
// const data = [
//     [1, 2, 3],
//     [-1, 4, 5],
//     [6, 7, 8],
//     [-2, -9, 10]
//   ];
//   // Output should be: [[1, 2, 3], [6, 7, 8]]

//   const check = (arr)=>{
//     let flag = true;
//     arr.forEach((item)=>{
//         if(item<0) flag=false;
//     })
//     return flag;
//   }
//   const ans = data.filter((arr)=>{
//     return check(arr);
//   })
//   console.log(ans);

// const users = [
//     { id: 1, name: 'John', active: true },
//     { id: 2, name: 'Jane', active: false },
//     { id: 3, name: 'Doe', active: true }
//   ];
  
//   // Output should be: [{ id: 1, name: 'John', active: true }, { id: 3, name: 'Doe', active: true }]

//   const check = (user)=>{
//     return user.active
//   }
//   const ans = users.filter((user)=>{
//     return check(user)
//   })
//   console.log(ans);
// Given an array of numbers, filter out duplicate elements.
// const numbers = [1, 2, 3, 2, 4, 5, 3, 6];

// // Output should be: [1, 2, 3, 4, 5, 6]
// const ans = numbers.filter((number,index,self)=>{
//     if(self.indexOf(number)===index) return true;
//     return false;
// })
// console.log(ans)

// const arr = [1, 2, 3, 4, 5];

// // Output should be: [1, 9, 25] (1^2, 3^2, 5^2)

// const ans = arr.filter((item)=>item%2).map((item)=>item*item)
// console.log(ans);

// const products = [
//     { name: 'Product1', price: 30, available: true },
//     { name: 'Product2', price: 50, available: false },
//     { name: 'Product3', price: 40, available: true },
//     { name: 'Product4', price: 25, available: true }
//   ];
  
//   const minPrice = 30;
//   const maxPrice = 45;
//   const availableOnly = true;
  
//   // Output should be: [{ name: 'Product1', price: 30, available: true }, { name: 'Product3', price: 40, available: true }]
//   const check = (product)=>{
//     if(product.price>=minPrice && product.price<=maxPrice && product.available) return true;
//     return false;
//   }
//   const ans = products.filter((item)=>{
//     return check(item)
//   })
//   console.log(ans);

// objects

// const person = {
//     name: "John",
//     friends: [
//       {
//         name: "Alice",
//         hobbies: ["programming", "reading", "swimming"]
//       },
//       {
//         name: "Bob",
//         hobbies: ["writing", "painting", "coding"]
//       }
//     ]
//   };
  
//  const ob = {...person};
// //  console.log(ob.friends[0].hobbies)

// ob.name = "Hoo";
// console.log(person)

// ob.friends.forEach((item)=>{
//     item.hobbies.sort((a,b)=>{
//         if(a>b) return 1;
//         return -1;
//     })
// })
// // console.log(ob.friends)
// console.log(person.friends)
  
// const students = [
//     { name: "Alice", grades: [90, 85, 92] },
//     { name: "Bob", grades: [88, 95, 89] },
//     { name: "Charlie", grades: [78, 92, 87] }
//   ];
  
//   const reducer = (acc, curr)=>{
//     const {name, grades} = curr;

//     acc[name] = grades.reduce((sum, i)=>{
//         return sum += i;
//     }, 0)/grades.length

//     return acc;
//   }
//   console.log(students.reduce(reducer, []))
