const http = require("http");
const fs = require("fs")

fs.readFile('./index.html', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        http.createServer(function (request, response) {
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        }).listen(5000, () => {
            console.log("The server is up and running");
        });
    }
});