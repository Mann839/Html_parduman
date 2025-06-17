const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the   template engine as pug
app.set('views',path.join(__dirname, 'views'));//set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{   
    const con = "This is the best content on the internet so far so good";
    const params = {'title':'pug is the best programming language in the world','content': con};//params to be passed to the pug template
    res.status(200).render('index.pug', params);//render the index.pug file with params
})
app.post('/',(req,res)=>{
    name = req.body.name;//get the name from the form
    email = req.body.email;//get the email from the form
       gender = req.body.gender;//get the gender from the form
     age = req.body.age;//get the age from the form
    address = req.body.address;//get the address from the form
    more = req.body.more;//get the more info from the form

    let outputToWrite = `The name of the client is ${name}, the email is ${email}, the gender is ${gender}, the age is ${age}, the address is ${address}, and the additional information is ${more}.`;
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Form submitted successfully!'};//params to be passed to the pug template
    res.status(200).render('index.pug',params);//render the index.pug file with params
});
// //our pug demo endpoint
// app.get('/demo', (req, res) => {
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there this is a demo!' });
// });

// app.get('/',(req,res)=>{
//     res.send('This is the home page');
// });
// app.get('/about',(req,res)=>{
//     res.send('This is the about page second express with same route');
// });
// app.post('/about',(req,res)=>{
//     res.send('This is the my post express in code of program about page second express with same route');
// });
// app.post('/this',(req,res)=>{
//     res.status(404).send('This is the my post express in code of program this page second express with same route');
// });

// START THE SERVER
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});