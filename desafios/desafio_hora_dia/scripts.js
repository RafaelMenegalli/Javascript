function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var foto = document.getElementById('foto')
    var msg = document.getElementById('texto')
    msg.innerHTML = `Agora são ${hora} Horas e ${minutos} Minutos`
    if(hora >= 0 && hora < 12){
        foto.src = 'imgs/manha.png'
        document.body.style.backgroundColor = '#f0cabf'
    } else if(hora >= 12 && hora < 18){
        foto.src = 'imgs/tarde.png'
        document.body.style.backgroundColor = '#fc950a'
    } else{
        foto.src = 'imgs/noite.png'
        document.body.style.backgroundColor = '#5f2862'
    }
}