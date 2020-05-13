// const express = require('express');
// const app = express();
// const port = 8000;

app.get('/', (req, res) => res.send('Hello, World!'));


app.get('/cats', (req, res)=> res.json('Meow'));
app.get('/dogs', (req, res)=> res.json('Woof'));
app.get('/cats_and_dogs', (req, res)=> res.json('Living together'));


app.get('/hello', (req, res)=>{
    const name = req.query.name || 'world';
    const age= req.query.age;
    res.send('You were born in 1990');

    res.send('Hello ' + name + '!');
});

app.get('/year', (req, res)=>{
    const age= req.query.age;
    const currentYear = 2020;

    res.send(`You were born ${currentYear - age}`);

});





app.listen(port, () => console.log(`listening on port http://127.0.0.1:${port}`))