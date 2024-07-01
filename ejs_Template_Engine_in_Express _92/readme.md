
# 🚀 Express and EJS Tutorial

Welcome to the Express and EJS 


## ⚙️ Setup
First, make sure you have Node.js and npm installed on your computer. Then, create a new directory for your project and navigate into it:

```bash
mkdir my-express-app
cd my-express-app
```

## 📦 Creating an Express App
Initialize a new Node.js project and install Express:

```bash
npm init -y
npm install express
```

Create a file named `index.js` and set up a basic Express server:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Run the server:

```bash
node index.js
```

## 🛠 Using EJS Templates
Install EJS:

```bash
npm install ejs
```

Set EJS as the view engine in your `index.js` file:

```javascript
app.set('view engine', 'ejs');
```

Create a `views` directory and add an `index.ejs` file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Express App</title>
</head>
<body>
  <h1>Welcome to <%= siteName %>!</h1>
</body>
</html>
```

Update the route in `index.js` to render the EJS template:

```javascript
app.get('/', (req, res) => {
  res.render('index', { siteName: 'My Awesome Site' });
});
```

## 💄 Adding Bootstrap
To quickly style our application, we'll use Bootstrap. Add the Bootstrap CSS and JS to your `index.ejs` file:

```html
<head>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
```

## 🔧 Passing Variables to Templates
In your `index.js`, you can pass variables to your EJS templates:

```javascript
app.get('/', (req, res) => {
  res.render('index', { siteName: 'My Awesome Site', searchText: 'Search Now' });
});
```

In your `index.ejs`, use the variables:

```html
<h1>Welcome to <%= siteName %>!</h1>
<input type="text" placeholder="<%= searchText %>">
```

## 🧩 Using Partials
Create reusable components with EJS partials. Create a `partials` directory in `views` and add a `navbar.ejs` file:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><%= siteName %></a>
</nav>
```

Include the partial in your `index.ejs`:

```html
<body>
  <%- include('partials/navbar') %>
  <h1>Welcome to <%= siteName %>!</h1>
</body>
```


## 📚 Resources
- [Express Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [Bootstrap Documentation](https://getbootstrap.com/)

