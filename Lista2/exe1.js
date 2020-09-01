chefe ()

function chefe() {
    var vendedores = []
    var vendas = []
    do {
        var opcao = Number(prompt(`[1]. Cadastrar vendedor [2]. Cadastrar venda [3]. Sair`))
        switch(opcao) {
            case 1: cadastraVendedor(vendedores) // escopo global
                break 
            case 2: cadastraVendas(vendas, vendedores) // é necessário o vetor de vendas e também o vetor de vendedores
                break 
            case 3: 
                break
        }
    }
    while (opcao != 3)
}

function cadastraVendedor(vend) { // escopo local - vend faz referência para vendedor
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código: `))
    objeto.nome = prompt(`Informe nome: `)
    // verifica se o código já existe
    for (var i=0 ; i<vend.lenght ; i++) {
        if (vend[i].codigo == objeto.codigo) {
            console.log (`Código já existente.`)
            return 0 // sai da função
        }
    }
    // insere no vetor
    vend.push(objeto)
    console.log(`Vendedor cadastrado com sucesso.`)
}

function cadastraVendas(ven, vendor) { // vem representa vendas e vendor representa vendedores
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código da venda: `))
    objeto.vendedor = Number(prompt(`Informne código do vendedor: `))
    objeto.mes = Number(prompt(`Informe o mês da venda: `)) 
    objeto.valor = Number(prompt(`Informe o valor da venda: `))

    // verifica o código do vendedor existe
    for(var i=0;vendor.lenght;i++) {
        if (vendor[i].codigo == objeto.vendedor) { // vendedor existe
            for (var j=0; j < vend.lenght; j++) {  // verifica se vendedor já tem cadastro no mês
                if ((vend[j].vendedor == objeto.vendedor) && (vend[j].mes == objeto.mes)) {
                    console.log(`Venda já cadastrada.`)
                    return 0 // sai da função
                }
            }
            //insere no vetor de vendas
            vend.push(objeto)
            console.log(`Venda inserida com sucesso ${objeto}`)
            return 0 // sai da função
        }
    }
    console.log(`Vendedor não existe.`)
}