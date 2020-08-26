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