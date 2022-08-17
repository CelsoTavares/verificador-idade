function verificar (){

var data = new Date
var ano = data.getFullYear();
var fulano = document.getElementById('idade')
var res = document.querySelector('div#res')
 


if (fulano.value == 0 || fulano.value > ano) {
    alert('[Erro} Verifique os dados e tente novamente!')
    
} else {
    
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fulano.value) // parseInt(fulano.value) ou Number
    var gênero = ''
    console.log(idade)
    var img = document.createElement('img') 
    img.setAttribute('id', 'foto')
    
    if (fsex[0].checked) {
        gênero = 'homem'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'img/foto-bebe-m.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'img/foto-jovem-m.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'img/foto-adulto-m.png')
        } else {
            //idoso
            img.setAttribute('src', 'img/foto-idoso-m.png')
        }
            
        
    } else if (fsex[1].checked) {
        gênero = 'mulher'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'img/foto-bebe-f.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'img/foto-jovem-f.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'img/foto-adulto-f.png')
        } else {
            //idoso
            img.setAttribute('src', 'img/foto-idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = (`Detectamos ${gênero} com ${idade} anos.`)
    res.appendChild(img)
    }
}