const router = require("express").Router();
const booksController = require("../controller")

router.route("/")
.get(booksController.findAll)