function calcularArea(){
    /* Algoritmo para calcular área e perímetro do retângulo 
    com base na base e altura
    */
    
    var base = parseInt(prompt("Informe o valor da base"));
    var altura = parseInt(prompt("Informe o valor da altura"));


    var area = base * altura;
    var perimetro = base + base + altura + altura;

    alert("Área do Retângulo: "+area+
        "\n Perímetro do Retângulo: "+perimetro);
}

function calcularAreaFormulario(){
    var base = document.getElementById("numBase").value;
    base = parseInt(base);
    
    var altura = parseInt(document.getElementById("numAltura").value);
    
    var area = base * altura;
    var perimetro = base + base + altura + altura;

    alert("Área do Retângulo: "+area+
        "\n Perímetro do Retângulo: "+perimetro);

}