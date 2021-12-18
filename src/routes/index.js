const siteRouter = require('./site');
const newsRouter = require('./news'); // ./news.js


function route(app) {

    // app.get('/news', (req, res) => {
    //     res.render('news')
    // })
    
    app.use('/news', newsRouter);
    app.use('/', siteRouter);



    app.post('/search', (req, res) => {
        console.log(req.body)
        res.send('')
    })

}

module.exports = route;
