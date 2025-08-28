const fs = require('fs'); //inserir a biblioteca "fs"

const conteudo = 'Este é o conteúdo do arquivo'; //o que será escrito no arquivo

fs.writeFile('arquivo.txt', conteudo, err =>{ //para criar o arquivo / nome do arquivo, variavel que contem o que será escrito, err é error abreviado, ou seja, pode mudar o nome 
    if(err) throw err; //se der erro, o erro aparecerá
    console.log('Arquivo criado!'); //se não tiver erro, o arquivo será criado
});