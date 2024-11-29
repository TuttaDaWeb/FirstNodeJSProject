const db = require('./db/db')

const create = (name, email, callback)=>{
    const sql = `INSERT INTO Teste(name, email) VALUES (?, ?))`
    db.run(sql, [name, email], callback)
}
const deleteData = (id, callback)=>{
    const sql = `DELETE FROM Teste WHERE id = ?;`
    db.run(sql, id, callback)
}

const readData = (callback)=>{
    const sql = `SELECT * FROM Teste`
    db.all(sql, callback)
}

module.exports = create, deleteData, readData;