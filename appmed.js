const express = require('express');
const data = require('./data');
const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    let age = req.query.age;
    let color = req.query.color;
    let a = [];
    if(age){
        a = data.filter(animal =animal.age == age);

    }
    if(color){
        a = data.filter(animal=>animal.color == color);
    }
    res.json(a);
});

app.get('/cat', (req, res)=> res.json(data.filter(animal=>animal.type == 'cat')));
app.get('/dog', (req, res)=> res.json(data.filter(animal=>animal.type =='dog')));
app.get('/:id', (req, res)=> res.json(data.filter(animal=> animal.id == req.params.id)));



app.listen(port, ()=>console.log(`listening on port http://127.0.0.1:${port}`))