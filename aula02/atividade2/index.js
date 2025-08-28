const fs = require('fs');

fs.readFile('produtos.json', 'utf8', (err,data)=>{
    if(err){
        console.error('Erro ao ler o arquivo', err);
        return;
    }
    try{
        const dados = JSON.parse(data);
        dados.produtos.forEach(produtos =>{
            console.log(`\nNome: ${produtos.nome}\nPreço: ${produtos.preço}\nDescrição: ${produtos.descriçao}\nCategoria: ${produtos.categoria}\n------------------------------------------------------\n`);
        });
    }
    catch(error){
        console.error("Erro ao analisar o JSON: ",error);
    }
});