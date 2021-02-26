// let nome = leandro;
// console.log(nome);
// let idade = 5; //declaração de variável, let é o tipo dessa variavel
// console.log(idade);
// let altura = 180;
// console.log(altura);

// const valorIngressoAdulto = 20;
// console.log(valorIngressoAdulto);

// let nome = 'leandro'; //string literal
// let idade = 25; // number literal
// let estaAprovado = true; //boolean
// let sobrenome = 'silva' ; //undefined
// let raça = 'branca';
// let nacionalidade = 'brasileira';
// let altura = '190';


// let pessoa = {
//     nome: 'Leandro', //chave e valor
//     idade: 25,
//     estaAprovado: true,
//     sobrenome : 'Silva',
//     raça : branca,
//     nacionalidade: brasileira,
//     altura: 190

// };

// console.log(pessoa);


// Arrays
// let familia = [2,45,56,17];
// console.log(familia.length);
// console.log(familia[1]);

// let nomeDoColega = ['joao',29,'recife','programador'];
// console.log(nomeDoColega.length);
// console.log(nomeDoColega[1]);

//Funcão
//Verbo + Substantivo
// let corSite = "azul";
// function resetaCor(cor, tonalidade){
//     corSite = cor + tonalidade;
// };

// console.log(corSite);
// resetaCor("verde", "claro");
// console.log(corSite);

//Tipos de Função
// 1: função realiza tarefa e não retorna nada
// function dizerNome(){
//     console.log('leo');
// }

// dizerNome();
// //funcao que faz um calculo ou operação e retorna algo
// function MultiplicarPorDois(valor){
//     return valor* 2;

// }

// // console.log(MultiplicarPorDois(5));

// let resultado = MultiplicarPorDois(5);

// console.log(resultado);

// operadores aritimeticos
//operadores de atribuição
//operadores de comparação
//operadores lógicos
//operadores bitwise

// let salario = 100;

// // + ,-,*,/,**

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(salario ** salario);

// ++ -- increm.. dec...
// let idade = 18;
// console.log(++idade);

// let valorTecladoGamer = 100;

// console.log(valorTecladoGamer);

// igualdade restrita
// console.log (1 === 1);
// console.log( '1' === 1);

// igualdade solta
// console.log (1 == 1);
// console.log ('1' == 1);

//operador ternario
//tem um cliente, 100 premium, comum
// let pontos = 100;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);

// Operador Logico e (&&)
// retorna true se os dois operandos forem true

// console.log(true && true);

// let maiorDeIdade = true;
// let possuiCarteiraTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraTrabalho;

// console.log(podeAplicar);

//operador Logico ou (||)
//retorna true se um dos operandos forem true
// let maiorDeIdade = false;
// let possuiCarteiraTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraTrabalho;

// console.log(podeAplicar);

//operador NOT (!)
// let candidatoRecusado = !podeAplicar;

// console.log(candidatoRecusado);

//falsy
//undefined
//null
//0
//false
// ''
//NaN - not a number

//truthy

// let corPersonalizada = 'vermelho';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);

//operadores condicionais 
//if... else

//se a hora estiver entre as 6h ate 12h : bom dia
// se estiver entre 12h ate 18:00 : boa tarde
// caso contrario : boa noite
// let hora = 10;

// if (hora > 6 && hora < 12) {
//     console.log("bom dia");
// }
// else if (hora > 12 && hora < 18) {
//     console.log("boa tarde");
// }
// else {
//     console.log("boa noite");
// }

// //switch case
// let permissao; // comum, gerente, diretor
// permissao = 'comum';

// switch (permissao) {
//     case 'comum' : 
//     console.log('usuario comum');
//     break;

//     case 'gerente' : 
//     console.log('usuario gerente');
//     break;

//     case 'diretor' : 
//     console.log('usuario diretor');
//     break;
    
//     default:
//         console.log('Usuario nao reconhecido');
    
// }

//loops
// //1 for
// for (let i =0; i < 5; i--) {
//     if(i % 2 !== 0){
//         console.log(i);
//     }
    
// }

// while loop
// let i = 5;

// while (i >= 1) {
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i--;
// }

// do while loop
// let i = 0;
// do {
//     console.log('digitando!', i);
//     i++;
// } while (i < 10)

//for in loop
const permissao = {
    nome: 'Jhonatan',
    idade: 22
};
for(let chave in pessoa) {
    console.log(chave, pessoa.nome);
}

const cores = ['vermelho','azul', 'verde'];

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//for - of loop
for(let cor of cores){
    console.log(cor);
}
