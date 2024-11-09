
var listaFilmes = [
    "./Filmes/Saw-X.png",
    "./Filmes/Oppenheimer.png",
    "./Filmes/BadBoys.png",
    "./Filmes/Ford-Vs-Ferrari.png",
    "./Filmes/Terrifier2.jpg",
    "./Filmes/The-Boys.png",
    ""
];

var nomesFilmes = [
    "Jogos Mortais X",
    "Oppenheimer",
    "Bad Boys - Até o fim",
    "Ford vs Ferrari",
    "Terrifier 2",
    "The Boys",
    ""
];

function exibirFilmes() {
    var container = document.getElementById("listaFilmes");
    container.innerHTML = "";

    for (var i = 0; i < listaFilmes.length - 1; i++) {
        var filmeContainer = document.createElement('div');
        filmeContainer.className = 'filme-container';

        var img = document.createElement("img");
        img.src = listaFilmes[i];
        img.onclick = function () {
            AbrirModal();
        };

        var nomeFilme = document.createElement('p');
        nomeFilme.className = 'nome-filme';
        nomeFilme.textContent = nomesFilmes[i];

        // Icone remover && ação 
        
        var iconeLixeira = document.createElement('i');
        iconeLixeira.className = 'material-icons';
        iconeLixeira.textContent = 'delete'
        iconeLixeira.title = 'Remover'
        iconeLixeira.onclick = (function(index) {
return function() {
Deletar(index);
};
})(i);

      



        // Childs

        filmeContainer.appendChild(img);
        filmeContainer.appendChild(nomeFilme);
        
        filmeContainer.appendChild(iconeLixeira)

        container.appendChild(filmeContainer);
    }

    // Adiciona um campo vazio com evento de clique
    var novoFilme = document.createElement("img");
    novoFilme.src = "add.png";
    novoFilme.className = 'novoFilme';
    
    novoFilme.onclick = adicionarFilme;
    container.appendChild(novoFilme);
}

function adicionarFilme() {
   
    var novoLink = prompt("Digite o link da imagem do novo poster em formato .jpg ou .png:");


    var novoNome = prompt("Digite o nome do novo filme:");

  
    if (novoLink !== null && novoLink !== "" && (novoLink.endsWith(".jpg") || novoLink.endsWith(".png")) &&
        novoNome !== null && novoNome !== "") {
  
        listaFilmes.splice(listaFilmes.length - 1, 0, novoLink);
        nomesFilmes.splice(nomesFilmes.length - 1, 0, novoNome);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Tente novamente..',
            text: 'Insira o link do poster desejado em formato .jpg ou .png e o nome do filme.',
        })
    }


    exibirFilmes();
}


// Remover Filme 

function Deletar(index){

if(index >= 0 && index < listaFilmes.length){

listaFilmes.splice(index, 1);
nomesFilmes.splice(index, 1);

exibirFilmes()


}

}


// 


window.onload = exibirFilmes;


// Abrir o modal 

function AbrirModal() {

    var Modal = document.getElementById('black-screen');

    Modal.style.display = 'block';
}

function fechar() {
    var Modal = document.getElementById('black-screen');
    Modal.style.display = 'none';
}

