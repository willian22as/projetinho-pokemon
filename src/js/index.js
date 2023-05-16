const BotaoAlterarTema  = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

const ImagemBotaoTrocaTema = document.querySelector(".imagem-botao")

BotaoAlterarTema.addEventListener("click", () => {
    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if(ModoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        ImagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png")

    }
    else {
        body.classList.add("modo-escuro");
    ImagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")
    }

});

