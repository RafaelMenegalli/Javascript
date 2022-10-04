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
        alert('Tudo Ok!')
    } else{
        alert('Valor invalido ou ja encotrado na Lista')
    }
}
