// Criar a lista de imagens
let imagens = [
    'assets/img/bolo4.jpg',
    'assets/img/bolo5.jpg',
    'assets/img/bolo6.jpg'
]

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document
        .getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}

// Lógica para exibir as imagens a
// Cada 5 segundos
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++

    // Verifica se chegou no fim das imagens
    // Ai volta pro começo
    if (indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }

}, 5000);

 exibirImagem()
indiceAtualListaImagens++