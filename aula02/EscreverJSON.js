const fs = require('fs');

//o que será escrito no JSON
const dados = {
    nome: 'Gabriel',
    idade: 18,
    cidade: 'São Caetano do Sul'
};

try{
    const jsonData = JSON.stringify(dados, null, 2); //Converte para string JSON com indentação
    fs.writeFile('dados.json', jsonData, 'utf8', (err)=>{
        if(err){
            console.error('Erro ao ler o arquivo: ', err);
            return;
        }
        console.log('Dados gravados com sucesso no arquivo!');
    });
}
catch(error){
    console.error('Erro ao converter para JSON: ', error);
};