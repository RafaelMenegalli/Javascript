let num = document.getElementById('txtnum')
let lista = document.getElementById('isel')
let res = document.getElementById('ires')
let valores = []

function isNumero(n){
 if(Number(n) >= 1 && Number(n) <= 100 ){
    return true
 } else{
    return false
 }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true 
    } else{
        return false
    }
}

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor invalido ou ja encotrado na Lista')
    }

    num.value = ''
    num.focus()
}

function Finalizar(){
    if(valores.length == 0){
        alert('Insira valores para poder finalizar!!')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos]> maior)
            maior = valores[pos]
            if(valores[pos]< menor)
            menor = valores[pos]
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} Numeros cadastrados.</p>`
        res.innerHTML += `<p> O maior numero cadastrado é ${maior}</p>`
        res.innerHTML += `<p> O menor numero cadastrado é ${menor}</P>`
        res.innerHTML += `<p> A soma dos numeros cadastrados é ${soma}</p>`
        res.innerHTML += `<p> A media dos valores digitadoe é ${media}`
    }
}