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
    let total = valores.length

    res.innerText += `O total de numeros cadastrados foi ${total}`
}
