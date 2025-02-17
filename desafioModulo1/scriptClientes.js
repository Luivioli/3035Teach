function enviarAtendimento(){
    let atendimentos = recuperaAtendimentos();
    atendimentos.push({
        tutor: {
            nome: document.getElementById("nome").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            dataAtend: document.getElementById("data").value
        },
        animal: {
            nome: document.getElementById("nomePet").value,
            idade: document.getElementById("idade").value,
            porte: document.getElementById("porte").value
        }
    });
    localStorage.setItem("atendimentos", JSON.stringify(atendimentos));
}

function recuperaAtendimentos(){
    let atendimentos = localStorage.getItem("atendimentos");
    if(atendimentos == null || atendimentos == undefined) {
        atendimentos = [];
    }else {
        atendimentos = JSON.parse(atendimentos);
    }
    return atendimentos;
}

function listaAtendimentos(){
    let cardsHtml = '';
    let atendimentos = recuperaAtendimentos();

    atendimentos.forEach(e => {
        cardsHtml += `<div class="card">
            <label class="nomePet">Nome: ${e.animal.nome} </label>
            <label class="dataAtendimento">Atendimento: ${e.tutor.dataAtend}</label>
        </div>`
    });

    document.getElementById("container").innerHTML = cardsHtml;
}