const express = require('express');
const app = express();

let users = [
    {
        username: "ram",
        email: "ram@gmail.com",
        age: 20
    },
    {
        username: "ritesh",
        email: "ritesh@gmail.com",
        age: 20
    }
];

// app.get('/', (req, res) => {
//     res.status(200).json(users);
// })

app.get('/getuser/:username', (req, res) => {
    const user = users.filter(elem => elem.username === req.params.username)

    if (user.length === 0) {
        res.status(200).json({ message: "No such user found" });
    }
    else {
        res.status(200).json(user);
    }

})

app.post('/adduser', (req, res) => {

    if (req.query.username === "") {
        res.status(403).json({ message: "username can't be empty" });
        return
    }
    const data = {
        username: req.query.username,
        email: req.query.email || "",
        age: req.query.age || "",
    }
    users.push(data)
    res.status(200).json("User added");
})

app.delete('/deleteuser/:username', (req, res) => {
    const index_of_user = users.findIndex(elem => {
        return (elem.username === req.params.username)
    })

    if (index_of_user >= 0) {
        users.splice(index_of_user, 1)
        res.status(200).json({ message: "User deleted" });
    }
    else {
        res.status(404).json({ message: "No Such user found" });
    }

})


app.listen(5000, () => {
    console.log('The server is up and running');
})

