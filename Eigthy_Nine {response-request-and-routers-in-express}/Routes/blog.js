const express = require('express')
const router = express.Router()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
    res.send('Birds home page')
})
router.get('/about', (req, res) => {
    res.send('Birds about page')
})
router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router