const home = (req, res) => {
    res.render("pages/index")
}

const product = (req, res) => {
    res.render("pages/product")
}

const checkout = (req, res) => {
    res.render("pages/checkout")
}

const store = (req, res) => {
    res.render("pages/store")
}

const login = (req, res) => {
    res.render("pages/login")
}

const profile = (req, res) => {
    res.render("pages/profile")
}

const register = (req, res) => {
   res.render("pages/login")
}

module.exports = {
    home, product, checkout, store, login, profile, register
}