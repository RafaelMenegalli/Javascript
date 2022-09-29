function contar(){
    let inicio = document.getElementById('iinicio')
    let final = document.getElementById('ifinal')
    let passo = document.getElementById('ipasso')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Por Favor Arrume as Informações')
    }else{
        let resultado = document.getElementById('iresultado')
        resultado.innerHTML = 'Contando:'

        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number (passo.value)

        for(let contador = i; contador <= f; contador += p){
            resultado.innerHTML += `${contador} `
        }
    }
}