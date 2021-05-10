// function sayHello() {
//     return "Hello World DG1";
// }

// function greet(fnMessage) {
//     console.log(fnMessage());
// }

// greet(sayHello);

// function sayHello() {
//     return function() {
//         return "Hello World 2";
//     }
// }

// let fn = sayHello();
// let message = fn();
// console.log (message);

// let numbers = [1,2,3];

// numbers = numbers.map(number => number * 2);

// console.log(numbers);

// setTimeout(() => console.log("Hello"), 2000);

// import { compose, pipe } from 'lodash/fp';


// let input = "  JavaScript  ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = str => str.trim();
// // const wrapInDiv = str => `<div>${str}</div>`;
// const wrap = (type, str) => `<${type}>${str}</${type}>`
// const toLowerCase = str => str.toLowerCase();

// const transform = pipe(trim, toLowerCase,wrap);
// console.log(transform(input));

// function add(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// const add2 = add(1)(5);
// console.log(add2);

// const add2 = a => b => a + b;
// let input = "  JavaScript  ";
// const trim = str => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`
// const toLowerCase = str => str.toLowerCase();
// const transform = pipe(trim, toLowerCase,wrap("span"));
// console.log(transform(input));

// const person = { 
//     name: 'John',
//     address: {
//         country: "USA",
//         city: "San Francisco"
//     } 
// };
// // const updated = Object.assign({}, person, { name: 'Bob', age: 30 });
// const updated = {...person,
//     address: {
//         ...person.address,
//         city: "New York"
//     },
//     name: "Bob"}
// // updated.address.city = "New York";
// console.log(person);

// const numbers = [1,2,3];

//adding
// const added = [...numbers,4];
// const added = [0,...numbers];
// console.log(added);
// const index = numbers.indexOf(2);
// const added = [
//     ...numbers.slice(0,index),
//     4,
//     ...numbers.slice(index)
// ];
// console.log(added);

//Removing
// const removed = numbers.filter(n => n !=2);
// console.log(removed);

//Updating
// const updated = numbers.map(n => n === 2 ? 20 : n);
// console.log(updated);

// import { Map } from 'immutable';

// let book = Map({ title: "Harry Potter"});

// function publish(book){
//     // book.isPublished = true;
//     return book.set("isPublished", true);
// }

// book = publish(book);

// console.log(book.get("title"));
// console.log(book.toJS());

// import { produce } from 'immer';

// let book = { title: "Harry Potter"};

// function publish(book){
//     return produce(book, draftBook => {
//         draftBook.isPublished = true;
//     });
// }

// let updated = publish(book);

// console.log(book);
// console.log(updated);
