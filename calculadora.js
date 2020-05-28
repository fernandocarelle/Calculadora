var valor1 = "";
var valor2 = "";
var resultado;
var operador = "";
var del;

function preencher(numero) {
    var aux = document.getElementById("visor").value;
    if (aux == "0") {
        document.getElementById("visor").value = numero;
    } else {
        document.getElementById("visor").value += numero;
    }
}

// Função para zerar o visor
function zerar() {
    document.getElementById("visor").value = 0;
    valor1 = "";
    operador = "";
}

function operacao(sinal) {
    if (valor1 == "") {
        operador = sinal;
        valor1 = parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = "";
    } else {
        switch (operador) {
            case '+':
                operador = sinal;
                valor2 = document.getElementById("visor").value;
                valor1 = parseFloat(valor1) + parseFloat(valor2);
                document.getElementById("visor").value = valor1;
                document.getElementById("visor").value = "";
                valor2 = "";
                break;
            case '-':
                operador = sinal;
                valor2 = document.getElementById("visor").value;
                valor1 = parseFloat(valor1) - parseFloat(valor2);
                document.getElementById("visor").value = valor1;
                document.getElementById("visor").value = "";
                valor2 = "";
                break;
            case '/':
                operador = sinal;
                valor2 = document.getElementById("visor").value;
                valor1 = parseFloat(valor1) / parseFloat(valor2);
                document.getElementById("visor").value = valor1;
                document.getElementById("visor").value = "";
                valor2 = "";
                break;
            case '*':
                operador = sinal;
                valor2 = document.getElementById("visor").value;
                valor1 = parseFloat(valor1) * parseFloat(valor2);
                document.getElementById("visor").value = valor1;
                document.getElementById("visor").value = "";
                valor2 = "";
                break;
            default:
                resultado = valor1;
                break;
        }

    }
}

function ponto() {
    document.getElementById("visor").value += '.';
}

// Função para alterar para número positivo ou negativo
function maisMenos() {
    if (document.getElementById("visor").value == "") {
        document.getElementById("visor").value = "-";
    } else {
        document.getElementById("visor").value = "";
    }
}

function calcular() {

    switch (operador) {
        case '+':
            resultado = valor1 + parseFloat(document.getElementById("visor").value);
            document.getElementById("visor").value = resultado.toLocaleString('pt-BR');
            break;
        case '-':
            resultado = valor1 - parseFloat(document.getElementById("visor").value);
            document.getElementById("visor").value = resultado.toLocaleString('pt-BR');
            break;
        case '/':
            resultado = valor1 / parseFloat(document.getElementById("visor").value);
            document.getElementById("visor").value = resultado.toLocaleString('pt-BR');
            break;
        case '*':
            resultado = valor1 * parseFloat(document.getElementById("visor").value);
            document.getElementById("visor").value = resultado.toLocaleString('pt-BR');
            break;
        default:
            resultado = valor1;
            document.getElementById("visor").value = resultado.toLocaleString('pt-BR');
            break;

    }
    valor1 = "";
    operador = "";
}

function porcentagem() {
    valor2 = parseFloat(document.getElementById("visor").value);
    if (operador == '*') {
        resultado = (valor1 / 100) * valor2;
    }
    document.getElementById("visor").value = resultado;
}

// Função para apagar o último número do visor
function backspace() {
    del = document.getElementById('visor').value;
    document.getElementById('visor').value = del.length;
    document.getElementById('visor').value = del.substr(0, del.length - 1);
}