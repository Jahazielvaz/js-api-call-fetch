let time = 0;

let timer = setInterval(() => {

  let newTime = time += 1;
  console.log(`${newTime} seconds have passed`)

  if(newTime >= 10){
    clearInterval(timer)
  }
}, 1000);
