
//pegar um input do usuário
// Caso resposta Sim, mostrar as categorias disponíveis, pergunta qual categoria escolher?
// Caso resposta Não, mostrar todos os livros em ordem crescente em quantidades de páginas.

const livros= require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro S/N: ')

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis: \n')
    console.log('/Ficcao', '/Motivacional', '/Historia', '/Fantasia \n')

    const entradaCategoria = readline.question('Qual categoria voce escolher: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis: ')
    console.table(livrosOrdenados)
}




