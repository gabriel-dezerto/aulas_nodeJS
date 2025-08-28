const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err,data)=>{
    if(err){
        console.error('Erro ao ler o arquivo', err);
        return;
    }

    try{ //após ler o arquivo JSON, agora ele tenta converter o arquivo que ele leu em texto e transforma em JSON, se não conseguir, captura o erro com o catch
        const dados = JSON.parse(data); //JSON.parse() faz essa conversão para a leitura JSON
        console.log('Dados lidos do arquivo: ', dados);
    }
    catch(error){
        console.error('Erro ao analisar o JSON: ', error);
    }
});