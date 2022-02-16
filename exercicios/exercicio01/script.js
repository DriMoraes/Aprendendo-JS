function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12)
    {
        //Bom Dia!
        img.src = 'img/manha.jpg'
        document.body.style.background = '#61a2c2'
    }
    else if (hora >= 12 && hora <= 18)
    {
        //Boa Tarde!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b29786'
    }
    else 
    {
        //Boa noite!
        img.src = 'img/noite.jpg'
        document.body.style.background = '#1a2d4d'
    }
}