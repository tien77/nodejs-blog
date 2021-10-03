const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/blog', (req, res) => {
    var a = 1,
        b = 2;
    var c = a + b;

    res.send('Page Blog edit')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})