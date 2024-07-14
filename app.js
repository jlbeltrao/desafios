function comprar() {
    let tipo = "qtd-" + document.getElementById("tipo-ingresso").value;
    let qtd = + document.getElementById("qtd").value;
        
    let qtdDisponivel = + document.getElementById(tipo).textContent;

    if (qtd > qtdDisponivel || qtd < 0 || qtd > 10 || qtd == 0) {
        alert("Não é possivel comprar essa quantidade de ingressos.");
    } else {
        if (confirm("Confirmar compra?") == true) {
        qtdDisponivel = qtdDisponivel - qtd ;
        document.getElementById(tipo).textContent = qtdDisponivel;
        alert(`Compra confirmada!`);
        }
    }
    document.getElementById('qtd').value = '';
}
document.getElementById("button").addEventListener("click", comprar);;