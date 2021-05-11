const {Router} = require("express")
const {home, product, checkout, store, login, profile, register} = require("../controller/router.controller")
const router = Router()

router.get("/", home)
router.get("/product/:id", product)
router.get("/checkout/:id", checkout)
router.get("/store", store)
router.get("/login", login)
router.get("/profile/:id", profile)
router.get("/register", register)

module.exports = router;