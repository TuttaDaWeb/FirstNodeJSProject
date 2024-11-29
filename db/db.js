const sqlite = require('sqlite3')

const db = new sqlite.Database("Teste.db", function(err){
    if(!err) return console.log('Database Connected')
    else return console.log(`Error to connecting Database`)
})

module.exports = db