const http = require("http");


export const server = http.createServer((req,res)=> {
    res.end("SUCA");

})

server.listen(5000);