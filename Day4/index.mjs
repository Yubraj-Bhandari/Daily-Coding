
import http from "http";

const server= http.createServer((req,res)=>{

switch(req.url){
    case "/books":
        res.writeHead(200);
        res.end("Book page ma Swagat xa");
break;
case "/other":
    res.writeHead(200);
    res.end("Others is running");

    default:
        res.writeHead(200);
        res.end("Backend is running");
}



});

server.listen(8000,()=>{
    console.log("server is running at port 8000");
    // callback function to respond if port 8000 runs
})

