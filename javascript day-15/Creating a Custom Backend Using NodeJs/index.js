const http = require('http');
const fs = require('fs');
// const readFileSync = fs.writeFileSync('') 

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const serviecs = fs.readFileSync('./serviecs.html')
const contact = fs.readFileSync('./contact.html')



const server = http.createServer((req,res) =>{
    console.log(req.url);
    url = req.url;

   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end(home);
  if (url == '/'){
   res.end(home);
  }
  else if (url == '/about'){
   res.end(about);
  }
  else if (url == '/services'){
   res.end(serviecs);
  }
  else if (url == '/contact'){
   res.end(contact);}
    else {
   res.statusCode = 404;
   res.end("404 not found");
  }

});   

 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});