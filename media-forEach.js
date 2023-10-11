const notas = [10, 6.5, 8, 7.5];
let soma = 0;
let media;

notas.forEach(function(nota){
    soma += nota;
})

media = soma / notas.length;
console.log(`A média foi: ${media}`);

