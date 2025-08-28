const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Qual o seu nome? ', nome =>{
    const novaLinha = `${nome}\n`; 
    fs.appendFile('nomes.txt', novaLinha, err =>{ 
        if (err) throw err;
        console.log('Informação adicionada!');
    });

    readline.close();
});