function contar(){
    let inicio = document.getElementById('iinicio')
    let final = document.getElementById('ifinal')
    let passo = document.getElementById('ipasso')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        let resultado = document.getElementById('iresultado')
        resultado.innerHTML = 'Dados Invalidos!'
    }else{
        let resultado = document.getElementById('iresultado')
        resultado.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number (passo.value)

        if(p <= 0){
            alert('[ERRO] Dados Invalidos. considerando passo (1)')
            p = 1
        }

        if(i < f){
            for(let contador = i; contador <= f; contador += p){
                resultado.innerHTML += `${contador} \u{1F34C}	`
            }
        }else{
            for(let contador = i; contador >= f; contador -= p){
                resultado.innerHTML += `${contador} \u{1F34C}`
            } 
        }
    }
}