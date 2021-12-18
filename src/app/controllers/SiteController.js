
class SiteController {

    // [GET] / page Home
    index(req, res) {
        res.render('home')
    }

    // [GET] /search/
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController; // new chính là tạo mới đối tượng SiteController và exports ra ngoài