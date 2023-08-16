require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// handlesbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Jorge Zuñiga',
        titulo: 'Curso Node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Jorge Zuñiga',
        titulo: 'Curso Node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Jorge Zuñiga',
        titulo: 'Curso Node'
    });
});

// app.get('/', function (req, res) {
//   res.send('Home page')
// });

// app.get('/generic', function (req, res) {
//   res.send( __dirname + '/public/generic.html' )
// });

// app.get('/elements', function (req, res) {
//   res.send( __dirname + '/public/elements.html' )
// });

app.get('*', function (req, res) {
  res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Exmaple app listening at http://localhost:${port}`)    
})