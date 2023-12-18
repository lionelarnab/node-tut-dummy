const http = require('http');
//Basics
// const server = http.createServer((req,res)=>{
//     res.write("Welcome to this page. This page is created by http module");
//     res.end();
// })

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end("This is our home page");}
    else if(req.url === '/about'){
    res.end("This is our about page");
    }
    else{ // If we don't give else then it will show error
    res.end(`
    <h1>Oops!</h1>
    <p>The page is not avialable what you are looking for</p>
    <a href="/">Go back to home page</a>
    `);}
})


server.listen(5000);