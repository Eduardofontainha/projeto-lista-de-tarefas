let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;
function addTarefa() {
    let valorInput = input.value;
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        contador++;
        let novoItem = 
        `<div id = "${contador}" class="item">
            <div onclick = "marcarTarefa(${contador})"class="item-icone">
                <img id = "img_${contador}" src="imagens/circulo.png" alt="Ícone de círculo">
            </div>
            <div onclick = "marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick = "deletar(${contador})" class="delete"><img src="imagens/delete.png" alt="Ícone de lixeira"> <p>Deletar</p></button>
            </div>
        </div>`
        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}
input.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item"){
       
        var img = document.getElementById('img_'+id);
        img.setAttribute('src', 'imagens/check circulo verde.png')
        item.classList.add('clicado');
        item.parentNode.appendChild(item);
        
    }else{
        var img = document.getElementById('img_'+id);
        img.setAttribute('src', 'imagens/circulo.png');
        item.classList.remove('clicado');
        
    }
}