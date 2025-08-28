const fs = require('fs'); //inserir modulo File System
const os = require('os'); //inserir biblioteca Sistema Operacional

//definir as variáveis conforme seu respectivo dado
const plat = os.platform;   //poderia pular essa etapa e colocar as funções direto no identificador de variável: ${os.platform()}
const arq = os.arch;        //poderia pular essa etapa e colocar as funções direto no identificador de variável: ${os.arch()}
const version = os.version; //poderia pular essa etapa e colocar as funções direto no identificador de variável: ${os.version()}
const type = os.type;       //poderia pular essa etapa e colocar as funções direto no identificador de variável: ${os.type()}

const conteudo = `Plataforma: ${plat}\nArquitetura: ${arq}\nVersão: ${version}\nTipo: ${type}\nCPUs: ${JSON.stringify(os.cpus())}`; // JSON.stringify(os.cpus()): transforma JSONs em strings // poderia colocar essa frase no lugar de "conteudo" dentro da função "writeFile"

fs.writeFile('info_sistema.txt', conteudo, err =>{  
    if(err) throw err;
    console.log('Arquivo criado!');
});

/*
2° opção de como criar o arquivo:

fs.writeFile('info_sistema.txt', `Plataforma: ${plat}\nArquitetura: ${arq}\nVersão: ${version}\nTipo: ${type}\nCPUs: ${JSON.stringify(os.cpus())}`, err =>{  
    if(err) throw err;
    console.log('Arquivo criado!');
});

*/