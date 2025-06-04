// console.log('hello world');
// //  server.mjs
// import { createServer } from 'node:http';
// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });
// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });
// // run with `node server.mjs`

const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation</title>
</head>
<style>
    .navbar{
    
        background-color: #7b9cee;
        padding: 0px;
        border-radius: 10px;
        margin: 0px;
    }
    .navbar ul{
        overflow: auto;
    }
    .navbar li{
        float: left;
        list-style: none;
        margin: 13px 10px;        
    }
    .navbar  li a{
        text-decoration: none;
        background-color: #668fe8;
        color: #1f1313;
        cursor: pointer;
    }
    .search{
        float: right;
        margin: 10px;
        color: #668fe8;
        padding: 12px 80px;
        border-radius: 10px;
    }
</style>
<body>
    <header>
        <nav class="navbar">
            <ul>
                <li href="#">
                    
                    home
                </li>
                <li href="#">
                    about</li>
                <li href="#">
                    services</li>
                <li href="#">                
                    contact
                </li><div class="search">
                    <input type="text" id="search" placeholder="search">
            </ul>
        </nav>
    </header>
    
</body>
</html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});  