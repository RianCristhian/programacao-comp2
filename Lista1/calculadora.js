// faça uma função que receba dois números e um operador como parâmetro
// e faça o cálculo e retorne o resultado

function principal() {
    // entrada de dados
    // solicita o 1° número
    var nro1 = Number(prompt("Informe um número"))
    // solicita 2° número
    var nro2 = Number(prompt("Informe outro número"))
    // solicita o operador
    var operador = prompt("Infome o operador (+, -, *, /")
    // chama a função
    var resultado = calculadora(nro1, nro2, operador)
    // mostra o resultado
    console.log(`O resultado da operação é: ${resultado}`)

}
// função recebe 3 parâmetros
function calculadora(nro1, nro2, operador) {
    switch(operador) {
        case '+': return nro1 + nro2
        case '-': return nro1 - nro2
        case '*': return nro1 * nro2
        case '/': if (nro2 == 0) {
            return `Não pode dividir por zero`
        }
        else {
            return nro1 / 2
        }
    }
}