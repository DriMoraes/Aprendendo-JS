/*código para exibir a hora de acordo com o sitema que está executando o script
var agora = new Date()
var hora = agora.getHours()*/

var hora = 10

console.log(`Agora são exatamente ${hora} horas`)
if(hora >5 && hora < 12){
    console.log('Bom dia!')
}else if(hora >= 12 && hora <18){
    console.log('Boa tarde!')
}else if(hora >= 18 && hora < 24){
    console.log('Boa noite!')    
}else{
    console.log('Boa madrugada!')
}
