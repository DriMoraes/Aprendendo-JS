function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()  
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12)
    {
        //Bom Dia!
        img.src = 'img/manha.png'
        document.body.style.background = '#efddc5'
    }
    else if (hora >= 12 && hora <= 18)
    {
        //Boa Tarde!
        img.src = 'img/tarde.png'
        document.body.style.background = '#f3d8d1'
    }
    else 
    {
        //Boa noite!
        img.src = 'img/noite.png'
        document.body.style.background = '#4e609e'
    }
}