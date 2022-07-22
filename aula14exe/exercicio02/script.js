function contar()
{
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (ini.length == 0 || fim.length == 0 || passo.length == 0){        
        alert('[ERRO] Faltam dados!');
    } else {
        alert('Tudo OK!');
    }
    
}