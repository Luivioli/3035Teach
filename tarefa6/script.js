const tarefas = [{
    nome: "Primeira",
    data: "10/02/2025",
    status: "concluída"
}, {
    nome: "Segunda",
    data: "09/03/2025",
    status: "concluída"
},  {
    nome: "Terceira",
    data: "08/04/2025",
    status: "não"
}];

function adiciona(nomeTarefa, dataTarefa, statusTarefa){
    let novaTarefa = {
        nome: nomeTarefa,
        data: dataTarefa,
        status: statusTarefa
    }
    tarefas.push(novaTarefa);
}

//adiciona("Quarta", "07/05/2025", "não")
//console.log(tarefas)

function concluir(nomeConcluir){
    for(let i = 0; i < tarefas.length; i++){    
        if(tarefas[i].nome == nomeConcluir){
            tarefas[i].status = "concluída";
        }
    }

}
//concluir("Terceira");
//console.log(tarefas);

function pendente(){
    for(let i = 0; i < tarefas.length; i++){    
        if(tarefas[i].status === "não"){
            console.log("A tarefa " + tarefas[i].nome + " está pendente")
        }
    }
}
//console.log(pendente());