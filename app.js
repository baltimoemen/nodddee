const http=require("http");
http.createServer((request, response) => {
    response.end("Hello Node")
}).listen(2023)

const fs=require("fs")
let data =fs.readFileSync("./welcome.txt")
console.log(data.toString())