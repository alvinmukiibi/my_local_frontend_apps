//this course is meant to revamp my mind with ES6 concepts
//how to transpile ES6 into ES5, the result is in dist/main.js
// class User {
// register() {
//     console.log("User regitration");
// }
// }

//let and const
"use strict";

// var a = "Test 1";
// let b = "test 2";
// console.log(b);
//on a global scope var and let are the same

// function testVar() {
//   var a = 30;
//   if (true) {
//     var a = 50;
//     console.log(a);
//   }
//   console.log(a);
// }

// testVar(); //returns 50 and 50

// function testLet() {
//   let b = 40;
//   if (true) {
//     let b = 70;
//     console.log(b);
//   }
//   console.log(b);
// }

// testLet(); //returns 70 then 40 so this means that let cannot be used outside of its defining scope

//the need for const

// const animals = [];

// animals.push("horse");
// animals.push("warthog");
// animals.push("dinosaur");

// console.log(animals); //no error

// animals = "Cow";

// console.log(animals); //brings errors because reference is being changed

//classes and inheritance

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   //now we create a dynamic method to register a user
//   register() {
//     console.log(this.username + " is now registered");
//   }

//   //we can also create a static method that doesnot require instantiation of the class to be called
//   static rulesForUser() {
//     console.log("All users shall be above 20 users of age");
//   }
// }

//not to call the methods in the class

// let lavin = new User("Lavin", "lavin@gmail.com", "123456");

// lavin.register();
// //lavin.rulesForUser(); //brings error because the method is static and does not belong to the object
// User.rulesForUser(); //this is the right way of invoking static methods

//inheritance

// class Member extends User {
//   constructor(username, email, password, memberPackage) {
//     super(username, email, password);
//     this.package = memberPackage;
//     //just like java
//   }

//   getPackage() {
//     console.log(
//       this.username + " is subscribed to the " + this.package + " package"
//     );
//   }
// }

// let kelly = new Member("Kelly", "kelly@gmail.com", "123456", "Premium");

// kelly.getPackage();
// kelly.register(); //we can call superclass methods

//template literals
//these allow us to use multiple lines in writing code without concatenating, defining variable and calling functions

//we can even use variables in here

// let name = "John";

//this is a function not a method, we can define methods without the function keyword but for functions, it must be there

// function makeUpperCase(word) {
//   return word.toUpperCase();
// }

// let template = `Hello ${name} This is a world
// where you got to
// fend for ${makeUpperCase("yourself")}`;

// console.log(template);

// let args = [1, 2, 3];
// let args2 = [4, 5, 6];

// function test() {
//   console.log(args + " " + args2);
// }

//to get args into the function
//test.apply(null, args); //for es5 but for es5 we do as below

// test(...args, ...args2);

//set and map
//set stores UNIQUE values of any type

// let myArr = [11, 22, 33, 44, 55];
// let mySet = new Set(myArr);

// mySet.add("66");
// mySet.add({ a: 2, b: 3 });
// mySet.delete(22);
// mySet.add(33); //will not be added because its already there
// //mySet.clear();

// console.log(mySet.size);

//we can even loop throug
// mySet.forEach(function(val) {
//   console.log(val);
// });
//mySet.forEach(val => console.log(val));

//maps
//this is for key value pair, like an associative array just differently written

// let myMap = new Map([["a1", "Hello"], ["b2", "Goodbye"]]);

// //adding things to it
// myMap.set("c3", "Comeback");
// myMap.delete("a1"); //we delete by the key

// console.log(myMap);

//weakset and weak map
//these are for objects

// let carWeakSet = new WeakSet();

// let carl = {
//   make: "Honda",
//   model: "Civic"
// };
// let toy = {
//   make: "Toyota",
//   model: "Olden"
// };

// carWeakSet.add(carl);
// carWeakSet.add(toy);
// console.log(carWeakSet);

// let carWeakMap = new WeakMap();

// let key1 = {
//   id: 1
// };

// let carl = {
//   make: "Honda",
//   model: "Civic"
// };

// carWeakMap.set(key1, carl); //now these are object to object pairs

// let key2 = {
//   id: 2
// };

// let toy = {
//   make: "Toyota",
//   model: "Olden"
// };

// carWeakMap.set(key2, toy);
// console.log(carWeakMap);

//arrow functions
//benefit - shorter syntx - allowd you to bind 'this' lexically

// function Prefixor(prefix) {
//   this.prefix = prefix;
// }

// Prefixor.prototype.prefixArray = function(arr) {
//   //let that = this; //this is a temporary workaround
//   return arr.map(x => {
//     console.log(this.prefix + x); //will bring error because 'this' is not defined so we use arrow functions
//   });
// };

// let pre = new Prefixor("Hello ");
// pre.prefixArray(["Brad", "Alvin"]);

// let add = function(a, b) {
//   let sum = a + b;
//   console.log(sum);
//   return false;
// };

// let add = (a, b) => console.log(a + b); //arrow function in full use

// add(2, 2);

//promises
//used for deferred ans asynchronous computations, not yet completed but gets finished in the future

// var myPromise = Promise.resolve("Food");

// myPromise.then(res => {
//   console.log(res);
// });

//generators
//functions that can be paused and then resumed at anynumber of times and at each pause you can yield a value back

// function* g1() {
//   console.log();
// }
//promises
/* 
  A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.
We create a promise when a certain task’s completion time is uncertain or too long.
*/
const executor = (resolve, reject) => {
  if (Math.random() * 100 <= 90) {
    resolve("Promise resolved");
  }
  reject(new Error("Failed"));
};
const myPromise = new Promise(executor()); //takes in an executor function which describes the computation to be done
//The resolve and reject are functions themselves and are used to send back values to the promise object
//when the computation is successful, we send the results using resolve, and viceversa

//All Promise instances have a .then() method on them
//.then() accepts two callbacks. The first callback is invoked when the promise is resolved. The second callback is executed when the promise is rejected.
myPromise.then(
  resolvedValue => {
    console.log(resolvedValue);
  },
  error => {
    console.log(error);
  }
);
myProimse.catch(error => console.log(error.message));
