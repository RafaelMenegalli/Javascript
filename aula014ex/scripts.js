function contar(){
    var inicio = document.getElementById('iinicio').value
    var final = document.getElementById('ifinal').value
    var passo = document.getElementById('ipasso').value
    var resultado = document.getElementById('iresultado')
    var ideia = ''
    if(inicio == 0 || final == 0 || passo == 0){
        resultado.innerText = 'Dados Invalidos'
    } else{
        for(ideia = 1; ideia < final; ideia++){
            resultado.innerText = 
        }

    }
}