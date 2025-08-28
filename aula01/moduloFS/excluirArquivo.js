const fs = require('fs');

fs.unlink('arquivo.txt', err => { //unlink serve para apagar arquivos, não funciona para pastas 
    if(err) throw err;
    console.log('Arquivo excluído!');
});