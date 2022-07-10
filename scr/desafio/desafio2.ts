// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

enum Profissao {
    Analista,
    Padeiro,
    Contador,
    MMCFigther
};

enum Genero {
    M,
    F,
    O
};

interface Gente 
{
    nome : string,
    idade : number,
    sexo : Genero,
    profissao? : Profissao
};

const pessoa : Gente = {
    nome : "Maria Eloiza",
    idade : 14,
    sexo : Genero.F,
    profissao : Profissao.Analista
};

const outraPessoa : Gente = {
    nome : "Maria Eloiza",
    idade : 14,
    sexo : Genero.F    
};

console.log(`Pessoa 1 é ${pessoa} e pessoas 2 é ${outraPessoa}.`)