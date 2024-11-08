const db = require("../db")
const users = [{id: 0, name: "Iker"},{id: 1, name: "Hadi"}, {id: 2, name: "Artem"}]

const getHelloWorld = (req, res) => {
    res.json("Hello World")
} 

const getUsers = (req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, result) => {
        if (err){
            console.log(err)
        }
        res.json(result)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id, 10)
    /*res.json(users[id])*/
    const sql = "SELECT * FROM users WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if (err){
            console.log("Ha habido un problema")
            console.log(err)
        }
        res.json(result)
        console.log(result)
    })
}

const deleteUser = (req, res) =>{
    const id = parseInt(req.params.id, 10)
    const sql = "DELETE FROM users WHERE id = ?"
    db.query(sql, [id], (err, result)=>{
        if (err){
            console.log("Ha habido un problema")
        }
        res.json("Usuario eliminado")
    })
}

const insertUser = (req, res) =>{
    const { name, edad, profesion, curso } = req.body
    console.log(req.body)
    const sql = `INSERT INTO users (name, edad, profesion, curso) VALUES (?, ?, ?, ?)`
    db.query(sql, [name, edad, profesion, curso], (err, result) => {
        if (err){
            console.log(err)
        }
        res.json(`Usuario ${name} creado`)
    })
}

const updateUser = (req, res) =>{
    const { name, edad, profesion, curso } = req.body;
    const updateFields = []
    const updateValues = []

    if (name){
        updateFields.push("name = ?")
        updateValues.push(name)   
    }

    if (edad){
        updateFields.push("edad = ?")
        updateValues.push(edad)   
    }

    if (profesion){
        updateFields.push("profesion = ?")
        updateValues.push(profesion)   
    }

    if (curso){
        updateFields.push("curso = ?")
        updateValues.push(curso)   
    }

    const id = parseInt(req.params.id,10)
    updateValues.push(id)
    
    const sql = `UPDATE users SET ${updateFields.join(", ")} WHERE id = ?`
    db.query(sql, updateValues, (err, result) => {
        if (err){
            console.log(err)
        }
        res.json(`Usuario con id: ${id} actualizado`)
    })
}

module.exports = {
    getHelloWorld,
    getUsers,
    getUserById,
    deleteUser,
    insertUser,
    updateUser
}