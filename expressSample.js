let express = require('express');

let app = express();

//app.set is used to set the template engine
app.set('view engine', 'ejs');

//app.use is used for middleware. If you specify a path, you're telling it to only run on that route. If you don't specify a route, it's going to run on every single request.
//The next parameter tells express to run the next piece of middleware, after the current middleware target has been executed.
app.use('/assets', express.static('assets'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/sample/:profile', (req, res) => {
  let profile = ['Jazzy', 'Vazquez','Entrepreneur/Software Engineer']

  res.render('viewSample', {profile: Array.from(profile), name: req.params.profile})
})

app.listen(3000);
console.log('Server listening to port 3000');
