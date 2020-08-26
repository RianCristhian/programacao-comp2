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

}
function requisto2(vet) { // vet aponta para vetor

}
function requisto3(vet) { // vet aponta para vetor

}
function requisto4(vet) { // vet aponta para vetor

}
function requisto5(vet) { // vet aponta para vetor

}
