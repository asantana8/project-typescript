// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
 let employee = {};
 employee.code = 10;
 employee.name = "John";
*/

//Criando inteface
interface Employee { 
    code : number, 
    name : string 
}

const funcionarioObj = {} as Employee;
funcionarioObj.code = 19;
funcionarioObj.name = "Adriano Santana";

const funcionarioObj2 : Employee = {
    code : 22,
    name : 'Maiely Janys'
}

console.log(`Funcionário 1 ${funcionarioObj} e funcionário 2 ${funcionarioObj2}.`);