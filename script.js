// Atualiza o contador ao vivo do relacionamento
function atualizarContador() {
    const dataInicio = new Date("2022-02-10T00:00:00"); // Altere para a data real
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contadorAoVivo").innerText = 
        `Nosso amor já dura ${dias} dias, ${horas} horas e ${minutos} minutos! 💕`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

// Alterna entre modo claro e escuro
document.getElementById("toggleModo").addEventListener("click", function() {
    document.body.classList.toggle("claro");

    // Atualiza o texto do botão
    const botao = document.getElementById("toggleModo");
    botao.innerText = document.body.classList.contains("claro") ? "🌙 Modo Noturno" : "☀️ Modo Claro";
});

// Função para tocar ou pausar a música
document.getElementById("playPause").addEventListener("click", function() {
    const musica = document.getElementById("musica");

    if (musica.paused) {
        musica.play().catch(error => console.log("Autoplay bloqueado:", error));
        this.innerText = "⏸️ Pausar Música";
    } else {
        musica.pause();
        this.innerText = "🎵 Tocar Música";
    }
});

// Adiciona CSS para os corações dinamicamente
const estilo = document.createElement("style");
estilo.innerHTML = `
    .coracao {
        position: fixed;
        top: -10px;
        font-size: 30px;
        opacity: 0.8;
        animation: cair 5s linear infinite;
    }

    @keyframes cair {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(estilo);

// Função para criar corações caindo na tela
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "💖";

    // Define posição e animação
    coracao.style.left = Math.random() * 100 + "vw";  
    coracao.style.animationDuration = Math.random() * 3 + 2 + "s"; 

    document.body.appendChild(coracao);

    // Remove o coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

// Criar corações continuamente
setInterval(criarCoracao, 500);