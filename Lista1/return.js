function principal () {
    var resp1 = Number(prompt("Informe um número"))
    var resp2 = Number(prompt("Informe outro número"))
    var result = soma(resp1, resp2)
    console.log(`A soma é ${result}`)
}
function soma (x, y){
    return x + y 
}
