var idade = 24
console.log(`Você com ${idade} anos.`)
if(idade < 16){
    console.log('Não pode votar')
} else{
    if(idade < 18 || idade >= 65){
        console.log('Voto Opicional')
    } else{
        console.log('Voto Obrigatório')
    }
}