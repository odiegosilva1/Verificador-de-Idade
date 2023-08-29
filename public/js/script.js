function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)// Calcula idade.
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './assets/bb-menino.jpg')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', './assets/h-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './assets/h-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', './assets/h-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade >= 10 && idade < 21) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }   res.appendChild(img)
}