function botao() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
}

function redirecionar() {
    window.open("https://www.google.com"); //Abre outra aba (janela) no navegador
    //window.location.href = "https://www.google.com"; // abre o endereço na mesma aba(janela) no navegador

}

function trocar(elemento) {
    // document.getElementById("mouseMove").innerHTML = "Obrigado por  passar o Mouse"
    // alert("trocar texto");
    elemento.innerHTML = "Obrigado por  passar o Mouse"
}

function voltar(elemento) {
    //document.getElementById("mouseMove").innerHTML = "Passe o Mouse aqui !!"
    elemento.innerHTML = "Passe o Mouse aqui !!"

}

function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
// function soma(n1, n2) {
//     return n1 + n2;

// }

// function replaceSetname(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome)
// }
// alert(soma(18, 25));
// alert(replaceSetname("vai la Japao !!", "Japao", "Brasil"));


/*

var d = new Date(); // pegando a data atual do sistema
if (d.getDay() == 0) {
    alert("Domingo"); // retornando a data atual
}
if (d.getDay() == 1) {
    alert("Segunda-feira"); // retornando a data atual
}
if (d.getDay() == 2) {
    alert("Terça-feira"); // retornando a data atual
}
if (d.getDay() == 3) {
    alert("Quarta-feira"); // retornando a data atual
}
if (d.getDay() == 4) {
    alert("Quinta-feira"); // retornando a data atual
}
if (d.getDay() == 5) {
    alert("Sexta-feira"); // retornando a data atual
}
if (d.getDay() == 6) {
    alert("Sabado"); // retornando a data atual
}*/
//
//
/*
var d = new Date(); // pegando a data atual do sistema
var frase = "O dia da semana atual é: ";
alert(frase + (d.getDay())); // retornando os Minutos atual concatenado com uma string
*/


//var d = new Date(); // pegando a data atual do sistema
//var frase = "O Mês atual é: ";
//alert(frase + (d.getMonth() + 1)); // retornando o Mês atual concatenado com uma string
/*
var d = new Date(); // pegando a data atual do sistema
var frase = "Os Minutos atual é: ";
alert(frase + (d.getMinutes())); // retornando os Minutos atual concatenado com uma string
*/
/*
var d = new Date(); // pegando a data atual do sistema
var frase = "O Ano atual é: ";
alert(frase + (d.getFullYear())); // retornando o Ano atual concatenado com uma string
*/
/*
var d = new Date(); // pegando a data atual do sistema
var frase = "O Dia atual é: ";
alert(frase + (d.getDate())); // retornando o Dia atual concatenado com uma string
*/

/*var count
for (count = 0; count <= 5; count++) {
    console.log(count);
}*/

/*var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade?");  comando prompt abre um input para a coleta de dados que sera armasenada na variavel idade para a futura comparação
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/

/*var frutas = [{
    nome: "mação",
    cor: "vermela",
    tamanho: "pequeno"
}, {
    nome: "uva",
    cor: "roxa",
    tamanho: "pequeno"
}];
console.log(frutas);
alert(frutas[1].nome)



 var frutas = {
     nome: "mação",
     cor: "vermela",
     tamanho: "pequeno"
 };
 console.log(frutas.nome);
 alert(frutas.cor)

 // var lista = ["Maçã", "pera", "Uva", "morango"];
 //   lista.push("Melão"); //add na lista
 //   lista.pop(); //retira o ultimo item da lista 
 //  console.log(lista.length);//mostra quantos elementos eu tenho na minha lista
 //console.log(lista.reverse()); // mostra minha lista em ordem inversa
 // console.log(lista.length);
 // console.log(lista.toString()); // transforma o array em string
 // console.log(lista.join("|")); // define como sera separado o array


  var nome = "Luciano Nunes";
   var idade = 29;
   var idade2 = 34;
   var frase = "Japão é o melhor time do mundo!!";
   // alert("Bem Vindo " + nome + "voce tem "+ idade2+"anos");
   // alert(frase);
   // alert(idade + idade2);
   altera a primeira string pela segunda
   alert(frase.replace("Japão", "Brasil"));
    coloca toda frase em Maiusculas
   alert(frase.replace("Japão", "Brasil").toLocaleUpperCase());
   coloca toda a string em minuscula
   alert(frase.replace("Japão", "Brasil").toLocaleLowerCase());
   para mostrar no console o comando é :
    console.log(idade + idade2);
   */