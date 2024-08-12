function calcularOperacao(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;

    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);

    var operacao = document.getElementById("operacao").value;

    var resultado;
    switch(operacao){
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        default:
            alert("Selecione uma operação");
            return;
    }
    alert("Resultado: "+resultado);

}