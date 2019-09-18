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

// console.log(__dirname);
// console.log(__filename);

// This totally works in regular js as well
let func1 = () =>  console.log('I love this passing');

let func2 = (fun) => fun();

func2(func1);
