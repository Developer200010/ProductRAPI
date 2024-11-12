const router = require("express").Router();
const {allProduct, allProductTesting} = require("../controllers/products.js")


router.route("/").get(allProduct)
router.route("/testing").get(allProductTesting)

module.exports = router;