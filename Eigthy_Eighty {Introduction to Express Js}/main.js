const express = require('express');
const app = express();
const port = 3000;






app.use(express.static('public'))




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/About', (req, res) => {
  res.send('Hello About!');
});

app.get('/Contact', (req, res) => {
  res.send('Hello Contact!');
});

app.get('/Blong', (req, res) => {
  res.send('Hello Blong!');
});

app.get('/contact', (req, res) => {
  res.send('Hello World!');
});

app.get('/blong/into-to-js', (req, res) => {
  res.send('Hello into-to-js!');
});

app.get('/blong/into-to-Python', (req, res) => {
  res.send('Hello into-to-Python!');
});

app.get('/blong/:slug/:second', (req, res) => {
  // logic to fetch {slug} and {second} from the DB
  res.send(`hello ${req.params.slug} and ${req.params.second}`);
});

app.get('/blong/:slug', (req, res) => {
  // logic to fetch {slug} from the DB
  console.log(req.params);
  console.log(req.query);
  res.send(`hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
