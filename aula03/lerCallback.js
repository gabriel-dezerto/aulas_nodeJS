const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err,data)=>{ //readFile() é a função e (err,data) vai ser o callback, pois ele é um parametro da função readFile()
    if(err){
        console.log("Erro ao ler o arquivo: ",err);
        return;
    };
    console.log("Conteúdo do arquivo: ", data);
});
console.log("Essa linha será executada antes da leitura do arquivo.") //isso aqui executa primeiro por causa da assincronidade