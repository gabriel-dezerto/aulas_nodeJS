const dados ={
    nome: 'João',
    idade: 30,
    endereço: {
        rua: 'Rua A',
        cidade: 'São Paulo'
    },
    telefones: ['11-1234-5678', '11-9876-5432']
};

console.log(dados.nome);
console.log(dados.endereço.cidade);
console.log(dados.telefones[0]);

//Para dados em array, usa-se forEach para iterar os elementos, aparecendo todos juntos
dados.telefones.forEach(telefone =>{
    console.log(`Telefone: ${telefone}`);
});

const dadosProdutos ={
    produtos: [
        {nome: 'Produto A', preço: 10},
        {nome: 'Produto B', preço: 20},
        {nome: 'Produto C', preço: 30}
    ]
}

dadosProdutos.produtos.forEach(produtos =>{
    console.log(`\nNome: ${produtos.nome}\nPreço: ${produtos.preço}\n`);
});
