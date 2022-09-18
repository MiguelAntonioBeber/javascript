function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //Manhã
        img.src = 'fotomanha.png'
        document.body.style.background = '#b6baba'
    }else if (hora >= 12 && hora <= 18) {
        //Tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#9b9e86'
    }else {
        //Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}


/*
document.body.style.background = '#e2cd9f' Manha

document.body.style.background = '#b9846f' Tarde

document.body.style.background = '#515154' Noite

*/