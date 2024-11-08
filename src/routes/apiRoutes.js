const express = require("express")
const router =  express.Router()
const controller = require("../controllers/controller")

router.get("/", controller.getHelloWorld)
router.get("/controller", controller.getController)
router.get("/users", controller.getUsers)
router.get("/users/:id", controller.getUserById)

module.exports = router