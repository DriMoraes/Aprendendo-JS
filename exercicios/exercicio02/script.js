function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert('Verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked)
        {
            genero = 'Homem'
            if (idade >=0 && idade <=2)           
            {
                 //Bebê
                 img.setAttribute('src', 'img/babyboy.png')
            } 
            else if (idade >2 && idade <= 10)
            {
                //Criança
                img.setAttribute('src', 'img/menino.png')
            }
            else if (idade < 21)
            {
                //Jovem
                img.setAttribute('src', 'img/jovemman.png')
            }
            else if (idade < 50)
            {
                //Adulto
                img.setAttribute('src', 'img/homem.png')
            }
            else 
            {
                //Idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        }
        else if (fsex[1].checked)
        {
            genero = 'Mulher'
            if (idade >=0 && idade <=2)           
            {
                 //Bebê
                 img.setAttribute('src', 'img/babygirl.png')
            } 
            else if (idade >2 && idade <= 10)
            {
                //Criança
                img.setAttribute('src', 'img/menina.png')
            }
            else if (idade < 21)
            {
                //Jovem
                img.setAttribute('src', 'img/jovemgirl.png')
            }
            else if (idade < 50)
            {
                //Adulto
                img.setAttribute('src', 'img/mulher.png')
            }
            else 
            {
                //Idoso
                img.setAttribute('src', 'img/idosa.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}