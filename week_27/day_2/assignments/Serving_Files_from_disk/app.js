const http = require("http");
const fs = require("fs")

fs.readFile('./persons.json', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        http.createServer(function (request, response) {
            response.writeHeader(200, { "Content-Type": "application/json" });
            response.write(data);
            response.end();
        }).listen(8000, () => {
            console.log("The server is up and running");
        });
    }
});