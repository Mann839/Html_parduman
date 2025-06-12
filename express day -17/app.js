const express = require('express');
const app = express();
const port = 80;

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