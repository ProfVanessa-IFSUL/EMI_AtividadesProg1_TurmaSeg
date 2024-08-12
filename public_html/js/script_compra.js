function calcularValorPagar(){
    // entrada (leitura dos valores)
    var produto = document.getElementById("numCodProduto").value;
    produto = parseInt(produto);

    var quantidade = document.getElementById("numQuantidade").value;
    quantidade = parseInt(quantidade);

    // Calcular o valor total com base na quantidade e no valor unitário do produto (processamento)
    if(produto == 1){
        var total = quantidade * 300;
        alert(quantidade+" tênis = "+total);
    } else if (produto == 2){
        var total = quantidade * 75.9;
        alert(quantidade+" camiseta = "+total);
    } else if(produto == 3){
        var total = quantidade * 190.90;
        alert(quantidade+" calça = "+total);
    } else {
        alert("Produto inválido!!!")
    }



}

function calcularValorPagar2(){
    // entrada (leitura dos valores)
    var produto = document.getElementById("numCodProduto").value;
    produto = parseInt(produto);

    var quantidade = document.getElementById("numQuantidade").value;
    quantidade = parseInt(quantidade);

    // Calcular o valor total com base na quantidade e no valor unitário do produto (processamento)
    var valor_unitario;
    var descricao_produto;
    if(produto == 1){
        valor_unitario = 300;
        descricao_produto = "tênis";
    } else if (produto == 2){
        valor_unitario = 75.9;
        descricao_produto = "camiseta";
    } else if(produto == 3){
        valor_unitario = 190.90;
        descricao_produto = "calça";
    } else {
        alert("Produto inválido!!!");
    }
    var total = quantidade * valor_unitario;
    alert(quantidade+" "+descricao_produto+" = R$ "+total.toFixed(2));
}

function calcularValorPagar3(){
    // entrada (leitura dos valores)
    var produto = document.getElementById("numCodProduto").value;
    produto = parseInt(produto);

    var quantidade = document.getElementById("numQuantidade").value;
    quantidade = parseInt(quantidade);

    // Calcular o valor total com base na quantidade e no valor unitário do produto (processamento)
    var valor_unitario;
    var descricao_produto;
    switch(produto){
        case 1: 
            valor_unitario = 300;
            descricao_produto = "tênis";
            break;
        case 2:
            valor_unitario = 75.9;
            descricao_produto = "camiseta";
            break;
        case 3: 
            valor_unitario = 190.90;
            descricao_produto = "calça";
            break;
        default:
            alert("Produto inválido");
            return;
    }
    
    
    var total = quantidade * valor_unitario;
    alert(quantidade+" "+descricao_produto+" = R$ "+total.toFixed(2));
}