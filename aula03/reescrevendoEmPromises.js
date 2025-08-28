const fs = require('fs').promises

fs.mkdir('pastaNova', {recursive: true})
    .then(() =>{
        console.log("Pasta criada!");
    })
    .catch(err =>{
        console.error("Erro: ", err);
    })
