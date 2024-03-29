DEFINITIONS
Function Expressions: instead of directly naming the function you create an anonymous function and assign it to a variable name, and that's what's known as a function expression.
Passing Functions Through Other Functions: You can pass one function as a parameter and execute it within the current function

Module Patterns/module.exports: Here you specify which aspects of a module you want to make available, and you do this by setting the module.exports equal to the names of the methods you want to include within it. These can be stored as an object, as standalone methods, etc.
  In other words, you can export through an object literal, dot notation directly in the method, or creating the method ahead of time and storing it through dot notation underneath.

Require: This allows you to access the methods returned by the module.exports of the module of choice. You invoke this by including the path within the require() method. And of course it's a good idea to store it in a variable, so you can access it easier.

Event Module: This is a core module. The module is called "events". One of the default properties returned by this module is the event emitter, which we can use to create custom events, and react to those events when they are emitted. These custom events can be whatever you want. The event emitter is a constructor.
  After making the custom event, we can pass a parameter through the anonymous function that you add to the event, which you can name whatever you want.
  The way you emit an event is by using the emit property (instead of using the click or other stock js events). The emit property/function contains 2 parameters. The first argument is the name of the event, the second argument is the specification of what you want to happen, like in this example, in the second argument you would include the content of the msg parameter.
    EXAMPLE:
      let events = require('events')
      let myEmitter = new events.EventEmitter();

      myEmitter

      myEmitter.on('myCustomEvent', (msg) => console.log(msg));

      myEmitter.emit('myCustomEvent', 'This is my hidden message');

Util Module: Util stands for utilities. The util module allows us to do multiple things including to inherit certain things from object building to nodejs.
  As explained above, util has many properties, but the one we want to focus on right now is the inheritance one. You trigger it by using util.inherits()
  util.inherits(): The first parameter in inherits is the method, or object which wants to inherit. The second parameter is what the target object or parameter actually wants to inherit. Which is this example is the event emitter.
  So at this point, it's going to inherit the event emitter, and anything created using the person method, will inherit that emitter.

Reading and Writing Files using FS: fs is another node core module.
  fs.readFileSync('myFile', 'utf8'): This is a synchonous method which means it won't execute the follow up code until it's finished reading the file. The first parameter is the name of the file, along with it's file path if applicable.
  fs.writeFileSync('myWrittenFile.txt', myFile): Just like in the method above, this one is also synchonous, however this actually writes a file instead of reading it. The first parameter is the chosen filename, as well as it's desired path. The second parameter is the actual content that you want to write in it, which in this is case is simply the content in the file called myFile.
  fs.readFile('myFile', 'utf8', (err, data) => console.log(data))
    The fs.readFile method is just like file sync, except it's asynchonous, which means you need to add a third parameter in which you include an anonymous function which tells the function when to end, in this function you include error handling, and data which refers to the data that it's going to read. 

STOCK METHODS
__filename : Returns the name of the current file that's being invoked
__dirname : Returns the name of the current directory that's being invoked
setTimeout() : Just like in JS returns the given result based on a specified time
setInterval() : Just like in JS returns the given result based on a looped timer
clearInterval() : Standard JS
