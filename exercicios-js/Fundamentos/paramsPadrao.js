function soma1(a, b, c) {
    a = a || "Sheila"
    b = b || "Sheila"
    c = c || "Sheila"
    return a + b + c
}
console.log(soma1(1, 2, 3), soma1(0, 0, 0), soma1('tati ', 2, ""))

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}
console.log(soma2(1, 2, 3), soma2(0, 0, 0), soma2(2))

// valor padrão
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(-1, -2, 4), soma3(), soma3(0, 0, 0))