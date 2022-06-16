//1 - crie uma função que exiba uma mensagem no console
function msg() {
    console.log("Iniciando o desafio de função");
}
msg();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function myName(name) {
    return name;
}
console.log("Meu nome é ",myName("Charles Antunes"));

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function listar(nome,idade,styleMusic) {
    return `Sou ${nome}, tenho ${idade} anos e meu estilo musical é ${styleMusic}`;
}
let preferencia = listar("Charles", 18, "Rock in Roll");
console.log(preferencia);

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function imprimi(filme, musica) {    
    console.log(`Meu filme favorito é ${filme}\nMinha música favorita é ${musica}`);
}

imprimi("Piratas do Vale do Silício","B.O.B.Y - System Of Down");

//*Bônus: 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(num) {
    num *= 3
    return num
}
let numero = 9;
console.log(`O triplo de ${numero} é ` + triplo(numero));