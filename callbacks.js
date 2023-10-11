const nomes = ['Paulo', 'Mari', 'Camis'];

// nomes.forEach(function (nome) {
//     console.log(nome);
// })

// nomes.forEach((nome) => {
//     console.log(nome);
// })

function exibeNome(nome){
    console.log(nome);
}

nomes.forEach(exibeNome);