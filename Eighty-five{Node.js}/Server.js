console.log("Hello World")
var slugify = require('slugify')
console.log(slugify)
slugify('some string') // some-string

// if you prefer something other than '-' as separator
slugify('some string', '_')  // some_string