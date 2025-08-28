const fs = require('fs').promises

fs.readFile('arquivo.txt', 'utf8')
    .then(data =>{
        console.log(data);
        return data.toUpperCase();
    })
    .then(dataMaiuscula =>{   //essa função recebe o valor que está no return
        console.log('Conteúdo em maiusculas: ', dataMaiuscula);
        return dataMaiuscula.toLowerCase();
    })
    .then(dataMinuscula => {
        console.log('Conteúdo em minusuculo: ', dataMinuscula);
    })
    .catch(err =>{
        console.error("Erro: ", err);
    })