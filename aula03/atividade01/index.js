const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,  
});

fs.readFile('config.json', 'utf8', (err, data)=>{
    if(err){
        console.error('Erro: ', err);
        return;
    }
    try{
        const dados = JSON.parse(data);
        readline.question("Qual informação você quer saber?\n", info =>{
            if(info == "Nome da aplicação"){
                console.log(`O nome da aplicação é ${dados.nome_aplicacao}`);
            }
            else if(info == "Versão"){
                console.log(`A versão é ${dados.versao}`);
            }
            else if(info == "Debug mode"){
                console.log(`Debug mode: ${dados.debug_mode}`);
            }
            else if(info == "Porta"){
                console.log(`A porta é ${dados.porta}`);
            }
            else{
                console.log("Configuração não encontrada.")
            }
            readline.close();
        })
    }
    catch(error){
        console.error('Erro ao ler arquivo: ', error);
    }
});
