function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('inascimento')
    var resultado = document.getElementById('resultado')

    if(nascimento.value.length == 0 || nascimento.value > ano){
        alert('[ERRO] Verifique os dados e tente Novamente!')
    } else{
        var idade = ano - Number(nascimento.value)
        var sexo1 = document.getElementsByTagName('sexo')
        var genero = ''
        if(sexo1[0].checked){
            genero = 'Homem'
        } else{
            genero = 'Mulher'
            resultado.innerHTML = `Detectamos ${genero} com ${idade} Anos de Idade!`
        }
    }
}