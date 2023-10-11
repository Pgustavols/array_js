const alunos = ['João', 'Carlos', 'Mathues', 'Caio'];
alunos.push('Felipe');
const medias = [10, 8, 7.5, 9];
medias.push(5);

const alunosEMedia = [alunos, medias];

function exibeNomeEMedia(aluno){
    if(alunosEMedia[0].includes(aluno)){
        let [alunos, medias] = alunosEMedia;
        let indice = alunos.indexOf(aluno);
        let media = medias[indice];
        console.log(`${aluno} teve média ${media}. O aluno foi ${media >7 ? 'APROVADO' : 'REPROVADO'}`); 
    }else{
        console.log(`Aluno não cadastrado no sistema.`);
    }
}

exibeNomeEMedia('Carlos');