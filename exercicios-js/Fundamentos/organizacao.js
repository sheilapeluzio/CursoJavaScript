function soBoaNoticia(nota) {

    if (nota > 10 || nota < 1)
        console.log('Nota inválida ' + (nota))
    else if (nota >= 7.0)
        console.log('aprovado com ' + (nota))
    else
        console.log('reprovado com ' + (nota))
}

function exponencial(num, expo) {
    let exp
    exp = 1
    for (var i = 1; i <= expo; i++) {
        console.log(exp = exp * num)
    }

}

console.log(Math.exponencial(6, 2))