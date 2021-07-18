const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to My first Node server!");
    res.end();
});

server.listen(5000, () => {
    console.log("The server is up and running");
});
