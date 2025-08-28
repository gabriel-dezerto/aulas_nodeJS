const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data)=>{ //para ler o arquivo.txt /'nome do arquivo', 'formatação', (verificar erro, dados do txt) 
    if (err) throw err; 
    console.log(data); //mostrar no console os dados escritos no txt
});