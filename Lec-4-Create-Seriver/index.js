const http = require("http");
const port = 8000;

const server = http.createServer((req,res)=>{
    res.writeHead(`<h1>Hello World</h1>`)
});
server.listen(port,(err)=>{
    if(err){
        console.log(`server is start on port:- ${port}`);      
    }
})