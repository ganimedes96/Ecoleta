// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//cria o objeto que ira fazer operacoes no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db;

//utilizar o objeto de banco de dados, para nossas operacoes

 db.serialize(() =>{

   
    //Deletar dados na tabela

//  db.run(`DELETE FROM places WHERE id = ?`, [], function(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Registro deletado com sucesso!")
//     })

})