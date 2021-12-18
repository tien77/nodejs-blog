const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars');
const morgan = require('morgan')
const app = express()
const port = 3000

const route = require('./routes'); // ./routes/index.js index.js sẽ tự nạp nên ta không cần viết index.js

app.use(express.static(path.join(__dirname, 'public')))

// HTPP logger
app.use(morgan('combined'))

//middleware
app.use(express.urlencoded())
app.use(express.json())

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// helo