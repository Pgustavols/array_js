const notasPaulo = [10, 8, 9, 9];
const notasGustavo = [6, 9, 7, 10];
let soma = 0;
let media;

const nomes = ['Paulo', 'Gustavo']

const notas = [notasPaulo, notasGustavo];

for(let i = 0; i < notas.length; i++){
    for(let j = 0; j < notas[i].length; j++){
        soma += notas[i][j];
    }
    media = soma / notas[i].length;
    console.log(`A média de ${nomes[i]} foi: ${media}`)
    soma = 0;
}