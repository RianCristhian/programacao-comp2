chefe()

function chefe() {
    var vetor = [] // escopo global - ele que iremos passar nos parâmetros da função

    do {

    var opcao = Number(prompt(`Digite [1]. Req1 [2]. Req2 [3]. Req3 [4]. Req4 [5]. Req5 [6]. Sair`))
    switch(opcao) { 
        case 1: requisito1(vetor)
            break
        case 2: requisito2(vetor)
            break
        case 3: requisito3(vetor)
            break
        case 4: requisito4(vetor)
            break 
        case 5: requisito5(vetor)
            break
        case 6: console.log(`Programa vai ser encerrado`)
            break 
        default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 6)
}

function requisto1(vet) { // vet aponta para vetor
    var objeto = new Object()
    objeto.sexo = prompt(`Informe M ou F`).toUpperCase()
    objeto.altura = Number(prompt(`Informe altura: `))
    objeto.idade = Number(prompt(`Informe idade: `))
    objeto.olhos = prompt(`Informe cor dos olhos - A - azul V - verde C - castanho`)
    // insere no vetor
    vet.push(objeto) // insere no vetor (escopo global)
    console.log(`Habitante cadastrado com sucesso`)
}
function requisto2(vet) { // vet aponta para vetor
    var soma = 0 
    var qtde = 0 
    for (var i=0;i<vet.length;i++) {
        if ((vet[i].olhos == 'C') && (vet[i].altura > 1.60)) { 
            soma = soma + vet[i].idade
            qtde++
        }
    }
    if (qtde != 0)
        console.log(`A média é: ${soma / qtde}`)
    else console.log(`Não existe habitante para este cálculo`)
}
function requisto3(vet) { // vet aponta para vetor
    var maior = vet[0].idade 
    for(var i=0;i<vet.length;i++) {
        if (vet[i].idade > maior) {
            maior = vet[i].idade
        }
    }
    console.log(`Maior idade ${maior}`)
}
function requisto4(vet) { // vet aponta para vetor
    var qtde = 0
    for(var i=0;i<vet.length;i++) {
        if (((vet[i].sexo == "F") && (vet[i].idade >= 20) && (vet[i].idade <= 40))
            ||
        (vet[i].olhos == "V") && (vet[i].altura < 1.70)) {
            qtde++
        }
    }
}
function requisto5(vet) { // vet aponta para vetor
    var qtde = 0
    for(var i=0;i<vet.length;i++) {
        if (vet[i].sexo == "M") {
            qtde++
        }
    }
    console.log(qtde/vet.length*100)
}
