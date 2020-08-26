// se n for 3: soma 1 + 2 + 3 -> 6
// se n for 8: soma de 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 -> 36
// ex 1
function exe1(n) {
    var soma = 0
    for (var i = 1; i <= n; i++) {
        soma = soma + i
    }
    return soma
}

function chefe() {
    var nro = Number(prompt(`Informe um número: `))
    var result = exe1(nro)
    console.log (`A soma dos números é: ${result}`)
}

chefe()

// exercício 2
function exe2(hora, min, seg) {
    for (var i=1; i<conver; i++){
        hora = 60*60*hora
        min = 60*min  
    }
}

function chefe() {
    var hora = Number(prompt(`Informe horas: `))
    var min = Number(prompt(`Informe minutos: `))
    var seg = Number(prompt(`Informe segundos: `))
    console.log(`A conversão é: ${hora + min + seg} segundos`)
}
chefe()


// exercício 3 - Vamos esperar 2 cadeias de caractéres passadas como parâmetro 
function exe3(cadeia1, cadeia2) {
    if (cadeia1 == cadeia2) {
        return 0 // as duas cadeia são iguais
    } 
    else {
        // percorrer a cadeia1 e compara posição por posição com cadeia2
        if (cadeia2.lenght > cadeia1.lenght) {
            return cadeia1.lenght
        }
        else {
            for (var i=0; i < cadeia1.lenght; i++) {
                if (cadeia1[i] != cadeia2[i]) { // é diferente
                    return i+1 // retorna posição e sai da função
                }
            }
        }
    }
}

function chefe() {
    var cad1 = prompt(`Informe a cadeia 1`)
    var cad2 = prompt(`Informe a cadeia 2`)
    var result = exe3 (cad1, cad2)
    console.log(`O resultado é ${result}`)
}

chefe()


// exercício 4
function exe4(raio) {
        var vol
        for (var i = 1; i <= raio; i++) {
        vol = 4/3 * (Math.pow(raio, 3))
        }
        return vol
}
function chefe() {
    var vol
    var raio = Number(prompt(`Digite o raio: `))
    var result = exe4(vol)
    console.log(`O volume é: ${result}`)
}

chefe()


// exercício 5
function exe5(n) {
    var nro
    if (nro > 0) {
        return (`positivo`)
    }
    else if (nro < 0) { 
        return (`negativo`)
    }
    else 
        return (`neutro`)
}

function chefe() {
    var nro = Number(prompt(`Digite um número: `))
    var result = exe5(nro)
    console.log(`${result}`)
}

chefe()

// exercício 6

// exercício 7
function chefe() {
    exe7()
}

function exe7() {
    var soma = 0
    var conta = 0
    var num = prompt(`Informe um número: `)
    do {

        conta++ // soma 1
        soma = soma + num // acumulador 
        num = Number(prompt(`Informe outro número. Digite número negativo para encerrar o programa.`))

    }
    while (num >= 0)

    console.log(`A média dos números é: ${soma / conta}`)
}

// exercício 9
exe9(9)

function exe9(num) {

    var soma = 0
    for (var i = num; i >= 1; i--) {
        if (num % i == 0) { 
            soma = soma + i 
    }
}
    console.log (`Soma dos divisores é: ${soma}`)
}