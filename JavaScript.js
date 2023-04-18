function gerarTabuada() {
    var numero = parseInt(document.getElementById('numero').value);
    var tabela = document.getElementById('tabela-tabuada');

    tabela.innerHTML = ""

    for(var i = 1; i <= 10; i++){
        var resultado = numero * i
        var linha = "<tr><td>" + numero + " X " + i + "</td><td>"  + "=" + resultado + "</td></tr>"



        tabela.innerHTML += linha
    }

}

const toggleBtn = document.getElementById("chk")
const body = document.body
const header = document.getElementById("head")

toggleBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode-header")
} )

const chk = document.getElementById('chk')

chk.addEventListener('changer', () => {
    document.body.classList.toggle('dark')
})