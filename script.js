document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("nao-clique");

    botao.addEventListener("mouseover", function () {
        const larguraJanela = window.innerWidth;
        const alturaJanela = window.innerHeight;
        
        const novaPosicaoX = Math.random() * (larguraJanela - botao.offsetWidth);
        const novaPosicaoY = Math.random() * (alturaJanela - botao.offsetHeight);

        botao.style.left = `${novaPosicaoX}px`;
        botao.style.top = `${novaPosicaoY}px`;
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Tab") {
            event.preventDefault();
            alert("Tecla Tab bloqueada!");
        }
    });
});