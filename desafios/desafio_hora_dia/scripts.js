function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var foto = document.getElementById('foto')
    var msg = document.getElementById('texto')
    msg.innerHTML = `Agora são ${hora} Horas e ${minutos} Minutos`
    if(hora >= 0 && hora < 12){
        foto.src = 'manha.png'
    } else if(hora >= 12 && hora < 18){
        foto.src = 'tarde.png'
    } else{
        foto.src = 'noite.png'
    }
}