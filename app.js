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

//EVENTS MODULE
let events = require('events');

let myEmitter = new events.EventEmitter();

myEmitter.on('customEvent', (num1, num2) => console.log(`The total is ${num1 * num2}`));

myEmitter.emit('customEvent', 330, 50);
