const express = require("express")
const router =  express.Router()
const controller = require("../controllers/controller")

router.get("/", controller.getHelloWorld)
router.get("/users", controller.getUsers)
router.get("/users/:id", controller.getUserById)
router.delete("/users/:id", controller.deleteUser)
router.post("/users", controller.insertUser)
router.put("/users/:id", controller.updateUser)

module.exports = router