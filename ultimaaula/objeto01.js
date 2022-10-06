var amigo = {nome: 'rafael', sexo: 'M', peso: '90.6', engordar(p=0){
    console.log('Engordou!')
    peso += p
}}

var eng = engordar(5)
console.log(eng)