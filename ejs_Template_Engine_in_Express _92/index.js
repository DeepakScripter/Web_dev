const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "adids"
    let searchText = "searchNow"
    res.render("index" , {siteName: siteName, searchText: searchText})
})


// app.get('/blog/:slug', (req, res) => {
//     let blogTitle = "adids why and when"
//     let blogContent = "searchNow is a good brand"
//     res.render("index", { blogTitle: blogTitle,
//         blogContent: blogContent
//      })
// })

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})