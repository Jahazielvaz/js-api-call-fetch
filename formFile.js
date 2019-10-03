let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let urlencoded = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs');
app.use('/assets', express.static('./views/assets'));

app.get('/contact', (req, res) => {

  res.render('contact')
})

app.post('/contact', urlencoded,  (req, res) => {
  console.log(JSON.parse(JSON.stringify(req.body)));
  res.render('returnPage', {data: req.body});
})

app.listen(3000)
console.log('Listening on port 3000');
