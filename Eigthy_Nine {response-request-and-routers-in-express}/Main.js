const express = require('express');
const blog = require('./Routes/blog')
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use('/blog', blog);

app.get('/Hello', (req, res) => {
    console.log('Received a GET request');
    res.send('Hello GET Request!');
});

app.post('/Index', (req, res) => {
    console.log('Received a POST request');
    res.send('Hello POST Request!');
});

app.put('/Index', (req, res) => {
    console.log('Received a PUT request');
    res.send('Hello PUT Request!');
});

app.delete('/Index', (req, res) => {
    console.log('Received a DELETE request');
    res.send('Hello DELETE Request!');
});

app.get('/index', (req, res) => {
    console.log('Received a Templates page request');;
    res.sendFile('Templates/index.html', { root: __dirname})
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
