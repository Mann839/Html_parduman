const express = require('express');
const path = require('path');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//for serving static files

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the   template engine as pug
app.set('views',path.join(__dirname, 'views'));//set the views directory

//ENDPOINTS
app.get('/',()=>{
    res.status(200).render('index', { title: 'Hey', message: 'Hello there this is my first express app!' });
})
//our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there this is a demo!' });
});

app.get('/',(req,res)=>{
    res.send('This is the home page');
});
app.get('/about',(req,res)=>{
    res.send('This is the about page second express with same route');
});
app.post('/about',(req,res)=>{
    res.send('This is the my post express in code of program about page second express with same route');
});
app.post('/this',(req,res)=>{
    res.status(404).send('This is the my post express in code of program this page second express with same route');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});