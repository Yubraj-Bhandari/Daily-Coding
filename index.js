// function add(a, b) {
//     return a + b;
// }

// export default add;


// URL module use
// import {URL} from "url";

// const url= new URL("https://google.com/huddleNepal");
// console.log(url.protocol);
// console.log(url.hostname);

// HTTP server create

import http from "http";

const server= http.createServer((req,res)=>{
res.writeHead(200);
res.end("Backend is working");
});

server.listen(8000,()=>{
    console.log("server is running at port 8000");
})


