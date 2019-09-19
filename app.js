// SET INTERVAL
// let time = 0;
//
// let timer = setInterval(() => {
//
//   let newTime = time += 1;
//   console.log(`${newTime} seconds have passed`)
//
//   if(newTime >= 10){
//     clearInterval(timer)
//   }
// }, 1000);

//CORE FUNCTIONALITY
// console.log(__dirname);
// console.log(__filename);

//EXPORT AND REQUIRE
// This totally works in regular js as well
// let func1 = () =>  console.log('I love this passing');
//
// let func2 = (fun) => fun();
//
// func2(func1);

// let operations = require('./stuff');
//
// console.log(operations.adder(23, 42387));

//EVENTS MODULE 1
// let events = require('events');
//
// let myEmitter = new events.EventEmitter();
//
// myEmitter.on('customEvent', (num1, num2) => console.log(`The total is ${num1 * num2}`));
//
// myEmitter.emit('customEvent', 330, 50);

// EVENTS MODULE 2
// let events = require('events');
// let util = require('util');
//
// class People{
//   constructor(name){
//     this.name = name
//   }
// }
//
// util.inherits(People, events.EventEmitter);
//
// let vince = new People('Vince'),
// cloud = new People('Cloud'),
// tifa = new People('Tifa')
//
// let people = [vince, cloud, tifa];
//
// people.forEach((person) => {
//   person.on('speak', (msg) => console.log(`${person.name} says: ${msg}`));
// });
//
// vince.emit('speak', "I'm Vince and I need a phone");
// cloud.emit('speak', "All this dillydallying");
// tifa.emit('speak', "I'm the keeper here");

//FS READING AND WRITING FILES
let fs = require('fs');

let readMe = fs.readFileSync('INDEX-NOTES', 'utf8');
// console.log(readMe);

fs.writeFileSync('README.md', readMe);
