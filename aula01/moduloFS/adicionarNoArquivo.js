const fs = require('fs');

const novaLinha = '\nNova Linha adicionada!'; //o que será escrito

fs.appendFile('arquivo.txt', novaLinha, err =>{ //appendFile é a forma de adicionar algum conteúdo ao final do arquivo
    if (err) throw err;
    console.log('Informação adicionada!');
});