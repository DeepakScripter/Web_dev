const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')

// const fs = require(fs)
// app.use(express.static("public"))
// Middleware 1
const fs = require("fs");
app.use('/blog', blog)
app.use((req, res, next) => {
    console.log(req.header)
    req.deepak = 56;
    fs.appendFileSync("longs.txt", `${Date.now()} is a ${req.method}\n`);
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("Hacked by Middleware 1");
    next();
});

//Middleware 2
app.use((req, res, next) => {
    console.log("login second")
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/about', (req, res) => {
    res.send('Hello about! + req.deepak')
})


app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})