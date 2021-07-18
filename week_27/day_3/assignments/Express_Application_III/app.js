const express = require('express');

const app = express()

app.use(express.json())


let books = [
    {
        title: "harry potter",
        author: "JK Rowling",
        year: 2001
    }
];


app.get('/', (req, res) => {
    res.status(200).json(books);
})

app.get('/book', (req, res) => {
    const query_book = books.filter(elem => elem.title === req.body.book)
    console.log(req.body)
    if (query_book.length === 0) {
        res.status(404).json({ message: "No Such Book Found" });
    }
    else {
        res.status(200).json(query_book);
    }
})

app.post('/create', (req, res) => {

    if (req.body.title === "") {
        res.status(403).json({ message: "title can't be empty" });
        return
    }

    const data = {
        title: req.body.title,
        author: req.body.author || "",
        year: req.body.year || "",
    }
    books.push(data)
    res.status(200).json({ status: "Success", message: req.body.title + " has been added to the array" });
})

app.delete('/delete', (req, res) => {
    const index_of_book = books.findIndex(elem => {
        return (elem.title === req.body.book)
    })

    if (index_of_book >= 0) {
        books.splice(index_of_book, 1)
        res.status(200).json({ status: "Success", message: req.body.book + " has been removed from the array" });
    }
    else {
        res.status(404).json({ message: "No Such Book Found" });
    }
})

app.put('/edityear', (req, res) => {
    const index_of_book = books.findIndex(elem => {
        return (elem.title === req.body.book)
    })

    if (index_of_book >= 0) {
        books.forEach((elem, i) => (i === index_of_book ? elem.year = req.body.year : elem))
        res.status(200).json({ status: "Success", message: req.body.book + "" });
    }
    else {
        res.status(404).json({ message: "No such book found with title " + req.body.book })
    }
})

app.listen(5000, () => {
    console.log('The server is up and running');
})