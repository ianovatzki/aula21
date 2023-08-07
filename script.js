function verificarVacina() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var comorbidade = document.getElementById("comorbidade").value;

    if ((idade >= 60) || (comorbidade === "S" || comorbidade === "s")) {
        alert(nome + ", pode se vacinar!");
    } else {
        alert(nome + ", não pode se vacinar!");
    }
}