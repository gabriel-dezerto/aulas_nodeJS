const fs = require('fs');

fs.mkdir('novaPasta', {recursive:true}, err=>{ //mkdir é para criar uma pasta /recursive serve para criar pastas mesmo que ela não exista
    if(err) throw err;
    console.log('Pasta criada!!');
});