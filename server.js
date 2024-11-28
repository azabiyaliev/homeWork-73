const http = require("http");
const port = 8000;

const server = http.createServer((request, response) => {
    console.log("Successfully connected to the server");
})

server.listen(port);
console.log(`Server started on port: http://127.0.0.1:${port}`);