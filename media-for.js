const notas = [10, 6.5, 8, 7.5];
let soma = 0;
let media;

for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}

media = soma / notas.length;

console.log(`A média foi ${media}.`)