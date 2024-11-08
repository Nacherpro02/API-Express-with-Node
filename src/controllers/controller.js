const db = require("../db")
const users = [{id: 0, name: "Iker"},{id: 1, name: "Hadi"}, {id: 2, name: "Artem"}]

const getHelloWorld = (req, res) => {
    const message = "Hello World"
    res.json(message)
    console.log(`Mensaje ${message} enviado`)
} 

const getController = (req, res) => {
    res.json({message: "Mensaje del controlador"})
}

const getUsers = (req, res) => {
    res.json(users)
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id, 10)
    /*res.json(users[id])*/
    sql = "SELECT * FROM users WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if (err){
            console.log("Ha habido un problema")
            console.log(err)
        }
        res.json(result)
        console.log(result)
    })
}

module.exports = {
    getController,
    getHelloWorld,
    getUsers,
    getUserById
};