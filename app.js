// // SET INTERVAL
// // let time = 0;
// //
// // let timer = setInterval(() => {
// //
// //   let newTime = time += 1;
// //   console.log(`${newTime} seconds have passed`)
// //
// //   if(newTime >= 10){
// //     clearInterval(timer)
// //   }
// // }, 1000);
//
// //CORE FUNCTIONALITY
// // console.log(__dirname);
// // console.log(__filename);
//
// //EXPORT AND REQUIRE
// // This totally works in regular js as well
// // let func1 = () =>  console.log('I love this passing');
// //
// // let func2 = (fun) => fun();
// //
// // func2(func1);
//
// // let operations = require('./stuff');
// //
// // console.log(operations.adder(23, 42387));
//
// //EVENTS MODULE 1
// // let events = require('events');
// //
// // let myEmitter = new events.EventEmitter();
// //
// // myEmitter.on('customEvent', (num1, num2) => console.log(`The total is ${num1 * num2}`));
// //
// // myEmitter.emit('customEvent', 330, 50);
//
// // EVENTS MODULE 2
// // let events = require('events');
// // let util = require('util');
// //
// // class People{
// //   constructor(name){
// //     this.name = name
// //   }
// // }
// //
// // util.inherits(People, events.EventEmitter);
// //
// // let vince = new People('Vince'),
// // cloud = new People('Cloud'),
// // tifa = new People('Tifa')
// //
// // let people = [vince, cloud, tifa];
// //
// // people.forEach((person) => {
// //   person.on('speak', (msg) => console.log(`${person.name} says: ${msg}`));
// // });
// //
// // vince.emit('speak', "I'm Vince and I need a phone");
// // cloud.emit('speak', "All this dillydallying");
// // tifa.emit('speak', "I'm the keeper here");
//
// //FS READING AND WRITING FILES
// let fs = require('fs');
// //
// // let readMe = fs.readFileSync('INDEX-NOTES', 'utf8');
// // console.log(readMe);
// //
// // fs.writeFileSync('README.md', readMe);
// // console.log(readMe)
// //
// // let syncRead = fs.readFile('README.md', 'utf8', (err, data) => {
// //   console.log(data)
// //   fs.writeFile('newerererFile.txt', data);
// // });
// // console.log('test')
//
// //CREATING AND REMOVING DIRECTORIES
// // fs.unlink('aSyncFile.txt', (err) => console.log(err));
// // fs.mkdir('puppies2', (err) => console.log(err));
// // fs.writeFile('./puppies2/cutePuppies.txt', 'I love cute puppies', (err) => console.log(err));
// // fs.rmdir('./puppies2', (err) => console.log(err));
//
// // fs.unlink('server.js', (err) => console.log(err));
// // fs.writeFile('./server.js', '//Server', (err) => console.log(err));
//
// // fs.writeFile('sample-text.txt', 'Bunch of text needs to be writen here', (err) => console.log(err));
//
// // let readStream = fs.createReadStream(__dirname + '/sample-text.txt');
// // let writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//
// //Without pipes we have to manually listen for the stream
// // readStream.on('data', (data) => {
// //   writeStream.write(data)
// // });
//
// //Pipes allows you to automate the wrting process. Pipes only work on readable streams.
// // readStream.pipe(writeStream);
// // fs.unlink('./writeMe.txt', (err) => console.log(err));
//
// // EXPRESS TUTORIAL SECTION
// let express = require('express');
//
// let app = express();
//
// app.get('/', (req, res) => {
//   res.send('My current homepage');
// });
//
// app.get('/contact', (req, res) => {
//   res.sendFile(__dirname + '/contact.html');
// });
//
// // PARAMS
// app.get('/people/:id', (req, res) => {
//    res.send(`Welcome Back ${req.params.id}`);
// });
//
// // SERVING VIEW TEMPLATES. IN THIS CASE EJS
app.set('view engine', 'ejs');
app.get('/profile/:name', (req, res) => {
  let data = {
    age: 33,
    career: 'Software Engineer/Entrepreneur',
    strength: 'He executes like a powerful CEO'
  }

  let interests = ['Software Engineering', 'Computer Networking', 'Hacking', 'Physics', 'Nature'];

  res.render('profile', {person: req.params.name, info: data, interests: interests})
})


// PORT
app.listen(3000);
console.log('App Server running on port 3000');
