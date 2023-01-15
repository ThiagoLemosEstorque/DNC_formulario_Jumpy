const submit = document.getElementById("btnCadastrar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");
const senha = document.getElementById("senha");

submit.addEventListener("click", (e) => {

    e.preventDefault();
    limparFormulario();

    if (!nome.value) campoObrigatorio("spanNome");
    if (!email.value) campoObrigatorio("spanEMail");
    if (!telefone.value) campoObrigatorio("spanTelefone");
    if (!cpf.value) campoObrigatorio("spanCpf");
    if (!senha.value) campoObrigatorio("spanSenha");
    else {
        document.getElementById("spanButton").innerHTML = "Sucesso!";
        document.getElementById("spanButton").style.color = "#0F7B0F";
        document.getElementById("spanButton").style.left = "32%";
    }

    document.getElementById("cadastro").reset();
});

function campoObrigatorio(n) {
    document.getElementById(`${n}`).innerHTML = "*Campo Obrigatório*";
    document.getElementById(`${n}`).style.color = "#E73550";
    document.getElementById("spanButton").innerHTML = "Campos obrigatórios não registrados.";
    document.getElementById("spanButton").style.color = "#E73550";
}

function limparFormulario() {
    document.getElementById("spanNome").innerHTML = "";
    document.getElementById("spanEMail").innerHTML = "";
    document.getElementById("spanTelefone").innerHTML = "";
    document.getElementById("spanCpf").innerHTML = "";
    document.getElementById("spanSenha").innerHTML = "";
    document.getElementById("spanButton").innerHTML = "";
}