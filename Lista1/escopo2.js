// se n for 3: soma 1 + 2 + 3 -> 6
// se n for 8: soma de 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 -> 36
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



// variáveis com escopo global
// podem ter escopo globar vetores e objetivos

chefe()

// variáveis com escopo global - vet
function entrada (vet) {
    vet.push(8)
    vet.push(6)
    vet.push(7)
}
// variáveis com escopo global - vet
function soma10 (vet) {
    for(var i=0; 1 < vet.length; i++) {
        vet[i] = vet [i] + 10
    }
}

// exemplo com vetor 
function chefe() {
    var vetor = []
    entrada(vetor)
    console.log(vetor) // qual o valor de vetor aqui
    soma10(vetor)
    console.log(`Valor final do vetor" ${vetor}`) // qual o valor de vetor
}



function chefe() {
    var carro = new Object()
    compra (carro)
    console.log(carro) // qual o valor de carro aqui
}

function compra (obj) {
    obj.modelo = 'Renegade'
    obj.marca = 'Jeep'
    obj.ano = 2019
}

chefe()

// exercício 3 - Vamos esperar 2 cadeias de caractéres passadas como parâmetro 
function ex3(cadeia1, cadeia2) {
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
    var result = ex3 (cad1, cad2)
    console.log(`O resultado é ${result}`)
}



function cadastra(vet) {
    var objeto = new Object()
    objeto.codigo = Number(prompt("Informe código"))
    objeto.qtde = Number(prompt("Informe quantidade"))
    objeto.preco = Number(prompt("Informe preço"))
    objeto.nome = prompt("Informe nome")
    // insere objeto no vetor
    vet.push(objeto)
}

function mostra(vet) {
    for (i=0; i<vet.lenght; i++) {
        console.log(vet[i])
    }
}


function chefe() {
    var vetor = []

    do {
        var opcao = Number(prompt("Digite uma opção [1]. Cadastrar /n [2]. Consultar"))
        switch(opcao) {
            case 1: cadastra (vator)
                break
            case 2: console.log(vetor)
                break
            case 3: console.log(`Até logo`)
                default: console.log(`Opção inválida`)
        }
    }
while (opcao != 3)
}

chefe()

function chefe() {
    // exercício 13
    // vetor com escopo global -> porque vamos passa-lo como parâmetro nas funções
    var vetor = []
    do {  
        var opcao = Number(prompt(`Escolha \n [1]. Cadastrar [2]. Média dos salários \n [3]. Menor e maior idade
        \n [4]. Quantidade de mulheres \n [5]. Sair do programa`))
        switch(opcao) {   
            case 1: entrada(vetor)
                break
            case 2: mediaSalario(vetor)
                break 
            case 3: menorMaiorIdade(vetor)
                break
            case 4: qtdeMulheres(vetor)
                break
            case 5: console.log(`Obrigado por utulizar nosso programa`)
                break
            default: console.log(`Opção inválida`)
        } 
    }
        while (opcao != 5)
}
function entrada (vet) {
    var objeto = new Object() // criamos um objeto
    objeto.salario = Number(prompt("Informe o salario"))
    objeto.nroFilhos = Number(prompt("Informe número de filhos"))
    objeto.sexo = prompt("Informe o sexo (M/F)").toUpperCase() // converte para maiúsculo
    objeto.idade = Number(prompt("Informe a idade"))
    // insere no vetor
    vet.push(objeto) // insere
}
function mediaSalario(vet) {
    if (vet == []) { // vetor está vazio
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        var soma = 0
        for (var i=0; 1<vet.lenght; i++) { // percorre o vetor
            soma = soma + vet[i].salario // acumula
        }
        console.log(`A média é ${soma/vet.lenght}`) // faz média
    }
}
function menorMaiorIdade(vet) {
    if (vet.lenght == 0) {
        console.log (`Nenhum habitante cadastrado`)
    }
    else {
        var menor = vet[0].idade // a idade do primeiro habitante é a menor
        var maior = vet[0].idade // a idade do primeiro habitante é a maior 
        for (var i=1; i<vet.lenght; i++) { // percorre o vetor
            if (vet[i].idade > maior) {
                maior = vet[i].idade
            }
            if (vet[i].idade < menor ) {
                menor = vet[i].idade // atualiza menor
            }
        }
        console.log(`Maior: ${maior} e menor ${menor}`) // faz a média
    }
}
function qtdeMulheres(vet) {
    console.log(`Entrou na função qtdeMulheres`)
}