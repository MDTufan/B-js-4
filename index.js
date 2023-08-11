const http =require('http');
const fs=require('fs');
const port=3000;
const hostName='127.0.0.1'

const myser = http.createServer((req,res)=>{
    if(req.url=="/"){
      res.writeHead(202,{'content-type':'text/plain'});
      res.write('server is home');
      res.end();
    }else if(req.url=="/contact"){
      res.writeHead(202,{'content-type':'text/plain'});
      res.write('server is contact');
      res.end();
    }else if(req.url=="/about"){
      
      res.writeHead(202,{'content-type':'text/plain'});
    res.write('server is about');
    res.end();
    }else{
      res.writeHead(202,{'content-type':'text/plain'});
    res.write('server is 404');
    res.end();
    }
});

myser.listen( port, hostName,()=>{
  console.log(`http://${hostName}:${port}`);
})