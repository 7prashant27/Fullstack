const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    const data = {
        data: Date.now(),
        userAgent: req.headers["user-agent"]
    }

    res.write(JSON.stringify(data));
    res.end();
});

server.listen(8000, () => {
    console.log("The server is up and running");
    console.log()
});
