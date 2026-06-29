 // // console.log("Hello from new.html");
/// / variables
// //         1
// // // // // //         // var name = "John Doe";
// // // // // //         // var is either function scoped or globally scoped depending on where it is declared.
// / // // // // // // // //         // function print(){
// // // // // //         //     var name = "John Doe";
// // // // // //         //     console.log(name);
// // // // // //         // }
// // // // // //         // print();
// // // // // //         // console.log(name); // ReferenceError: name is not defined
// // // // // //         // 2
// // // // // //         let name = "John Doe";  
// // // // // //         console.log(name);
// // // // // //         // let is block scoped, meaning it is only accessible within the block it is defined in.

// // // // // // Operators
// // // // // let a = 10;
// // // // // let b = 5;
// // // // // console.log(a + b); // Addition
// // // // // console.log(a - b); // Subtraction
// // // // // console.log(a * b); // Multiplication
// // // // // console.log(a / b); // Division
// // // // // console.log(a % b);

// // // // Ternary Operator
// // // // let Age = 20;
// // // // let Ans = (Age>10)?"CAN VOte":"Cannot Vote";
// // // // console.log(Ans);

// // // // Loops 
// // // for(let i=1 ; i<=10 ; i++){
// // //     console.log(i*2);
// // // }

// // // String
// // let name = "John Doe";
// // console.log(name);
// // name = `My
// // name 
// // is 
// // John Doe`;
// // console.log(name);
// let a = "op1";
// let b = "op2";
// let ans = `${a} ${b}`;
// // console.log(ans);
// let name = "English";
// console.log(name.substring(0,3));

// Functions
// function avg(a,b){
//     let ans = (a+b)/2;
//     console.log(ans);
// }
// avg(10,20);

// let sum = function(a,b){
//     return a+b;
// }
// let ans = sum(10,20);
// console.log(ans);

// let avg = (a,b) => {
//     let ans = (a+b)/2;
//     console.log(ans);
// }
// avg(10,20);

// Object

// let person = {
//     name : "Peter",
//     age : 19 ,
//     city : "New York",
//     Morning : ()=>{
//         console.log("Good Morning");
//     }
// }

// for(let key in person){
//     console.log(key , person[key]);
// }

// person.Morning();
// console.log(typeof(person));

// Array 
// let arr = [1,2,3,4,5];

// Method 2 
// let brr = new Array('love',100,true,20,40,10);
// brr.push('Babbar');
// brr.pop();
// brr.shift();
// brr.unshift('Hello');
// console.log(brr.slice(2,4));
// brr.splice(2,1,'Hello',);
// console.log(brr);

// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     // return number%2 === 0;
//     if(number%2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// });
// console.log(evenArray);

// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// })

let arr = [1,2,'love','kunal', null];

let ans = arr.filter((value) => {
    if(typeof(value) == 'number') {
        return true;
    }
    else {
        return false;
    }
});

console.log(ans);