function calcularReajuste(){
    // entrada
    var valor_atual = document.getElementById("numValorAtual").value;
    var aumento_perc = document.getElementById("numPorcentagem").value;

    valor_atual = parseFloat(valor_atual);
    aumento_perc = parseFloat(aumento_perc);


    // processamento
    var valor_aumento = valor_atual / 100 * aumento_perc;
    var valor_final = valor_atual + valor_aumento;
    
    // saída
    alert("Valor final do Produto: R$"+valor_final);
        
}