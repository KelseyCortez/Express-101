const express = require('express');
const data = require('./data');
const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/legal/', (req, res) => res.send(`These are the legal terms of this site...<br><a href = '/contact'>Go to Contacts</a><br><a href = '/'>Go to Homepage</a>`));
app.get('/legal/:page', (req, res) => res.json(req.params.page));


app.get('/contact', (req, res) => res.send(`This is the contact<br><a href = '/about'>Go to About</a><br><a href = '/'>Go to Homepage</a>`));
app.get('/contact/:page', (req, res) => res.json(req.params.page));


app.get('/about', (req, res) => res.send(`This is what this site is about<br><a href = '/legal'>Go to Legal</a><br><a href = '/'>Go to Homepage</a>`));
app.get('/about/:page', (req, res) => res.json(req.params.page));

app.get('/cat', (req, res) => res.json(data.filter(animal => animal.type == 'cat')));
app.get('/dog', (req, res) => res.json(data.filter(animal => animal.type == 'dog')));

app.get('/', (req, res) => {
    let age = req.query.age;
    let color = req.query.color;
    let a = [];
    if (age) {
        a = data.filter(animal => animal.age == age);
    }
    if (color) {
        a = data.filter(animal => animal.color == color);
    }
    res.json(a);
});


app.get('/:id', (req, res) => res.json(data.filter(animal => animal.id == req.params.id)));


app.listen(port, () => console.log(`listening on port http://127.0.0.1:${port}`))