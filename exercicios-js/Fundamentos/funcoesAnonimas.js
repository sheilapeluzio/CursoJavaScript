const soma = function(x, y) {
    return x + y
}
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 5)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) {
    return x * y
})
imprimirResultado(18, 4)