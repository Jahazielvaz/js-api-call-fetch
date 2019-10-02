let express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/sample/:profile', (req, res) => {
  let profile = ['Jazzy', 'Vazquez','Entrepreneur/Software Engineer']

  res.render('viewSample', {profile: Array.from(profile), name: req.params.profile})
})

app.listen(3000);
console.log('Server listening to port 3000');
