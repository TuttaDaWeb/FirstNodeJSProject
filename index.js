const express = require('express')
const db = require('./db/db')
const {create, deleteData, readData} = require('./crud')
const sql = `CREATE TABLE Teste(id INTEGER PRIMARY_KEY, name TEXT (50), email TEXT (80))`

const app = express()

app.use(express.json)

db.run(sql, (err)=>{
    if(!err) return console.log('Table Created')
    else return console.log('Error to created table')
})


app.get('/teste', (req, res)=>{
    readData((err)=>{
        if(!err){
            res.status(201).json(req.body)
        }else{
            res.status(500).send('Error')
        }
    })
})

app.post('/teste', (req, res)=>{
    const {name, email} = req.body
    create(name, email, (err, data)=>{
        if(!err){
            res.status(201).send(`This name is ${data.name}`)
        }else{
            res.status(500).send('Error')
        }
    })
})

app.listen(3000, ()=>{
    console.log('Server Connected')
})