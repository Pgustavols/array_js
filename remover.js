// pop e shift retira valores dos arrays
// pop retira o último valor
// shift retira o primeiro valor

const notas = [10, 6, 8, 5.5, 10]
notas.pop();
let media = 0;
for(let i = 0; i < notas.length; i++){
    media += notas[i] / notas.length;
}

console.log(`A média foi ${Math.round(media)}`);
