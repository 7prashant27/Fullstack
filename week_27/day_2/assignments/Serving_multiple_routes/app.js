const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            fs.readFile('./index.html', (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
            break;
        case "/about":
            fs.readFile('./about.html', (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
            break;
        case "/data":
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", "attachment;filename=file.csv");
            res.writeHead(200);
            res.write(`id,name,email\n1,Ritesh Ranjan,riteshranjan1997@gmail.com`);
            res.end();
            break;
        default:
            res.setHeader("Content-Type", "text/plain");
            res.writeHead(404);
            res.write("Page not Found");
            res.end();
            break;
    }
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});