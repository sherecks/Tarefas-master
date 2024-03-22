let novatarefa = document.getElementById('novatarefa');
let addtarefa = document.getElementById('addtarefa');
let listatarefa = document.getElementById('listatarefa');
let janelaedicao = document.getElementById('janelaedicao');
let atualizar = document.getElementById('atualizar');
let fechar = document.getElementById('fechar');
let janelaedicaofundo = document.getElementById('janelaedicaofundo');
let idtarefaedicao = document.getElementById('idtarefaedicao');
let tarefanomeedicao = document.getElementById('tarefanomeedicao');
let janelaexcluir = document.getElementById('janelaexcluir');
let janelaexcluirfundo = document.getElementById("janelaexcluirfundo");
let apagar = document.getElementById("apagar");
let fechar2 = document.getElementById('fechar2');


novatarefa.addEventListener('keypress',(e) =>{

    if(e.keyCode == 13){
        let tarefa = {
            nome: novatarefa.value,
            id: gerarid(),
        }
        addtarefas(tarefa);

    }
});

fechar2.addEventListener('click',(e) =>{
    limpar();
});

fechar.addEventListener('click',(e) => {
    alternar();
});

addtarefa.addEventListener('click',(e) => {
    let tarefa = {
        nome: novatarefa.value,
        id: gerarid(),
    }
    addtarefas(tarefa);

});

atualizar.addEventListener('click', (e) =>{
    e.preventDefault();

    let idtarefa = idtarefaedicao.innerHTML.replace('#','');
    let tarefa = {
        nome: tarefanomeedicao.value,
        id: idtarefa
    }

    let tarefaatual = document.getElementById(''+idtarefa+'');

    if(tarefaatual){
        let li = tagli(tarefa);
        listatarefa.replaceChild(li, tarefaatual);
        alternar();
    }else{
        alert('Elemento não encontrado');
    }

});

apagar.addEventListener('click', (e) => {

    e.preventDefault();
    limpar();
    
})
    
function gerarid() {
    return Math.floor(Math.random() * 3000)
    
}

function addtarefas(tarefa) {
    let li = tagli(tarefa);
    listatarefa.appendChild(li);
    novatarefa.value = '';
}

function tagli(tarefa) {
    let li = document.createElement('li');
    li.id = tarefa.id;

    let textarea = document.createElement('textarea');
    textarea.classList.add('texto');
    textarea.textContent = tarefa.nome;

    let div = document.createElement('div');

    let excluir = document.createElement('button');
    excluir.classList.add('acao');
    excluir.innerHTML = '<i class="fa fa-trash"> </i>'
    excluir.setAttribute('onclick', 'excluir('+tarefa.id+')');
    
    div.appendChild(excluir);

    li.appendChild(textarea);
    li.appendChild(div);
    listatarefa.appendChild(li); // Adiciona o <li> à lista de tarefas
    novatarefa.value = ''; // Limpa o valor do campo de entrada de texto
}


function editar(idtarefa, textoTarefa) {
    let li = document.getElementById('' + idtarefa + '');
    if(li){
        idtarefaedicao.innerHTML = '#' + idtarefa;
        tarefanomeedicao.value = textoTarefa;
        alternar();
    }else{
        alert('Elemento não encontrado');
    }
    
}

function excluir(idtarefa) {

    let li = document.getElementById('' + idtarefa + '');
    if(li){
        listatarefa.removeChild(li);
        limpar();
    }else{
        alert('Elemento não encontrado');
    }
    
}

function alternar() {
    janelaedicao.classList.toggle('abrir');
    janelaedicaofundo.classList.toggle('abrir');
}

function limpar() {
    janelaexcluir.classList.toggle('abrir');
    janelaexcluirfundo.classList.toggle('abrir');
}