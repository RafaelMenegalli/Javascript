function parimp(n){
    if(n%2 == 0){
        return 'par'
    } else{
        return 'ímpar'
    }
}

var resultado = parimp(19)
console.log(`O numero é ${resultado}`)