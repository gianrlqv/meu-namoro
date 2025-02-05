// 📌 Atualiza o contador ao vivo do relacionamento
function atualizarContador() {
    const dataInicio = new Date("2022-02-10T00:00:00"); // Altere para a data real
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("contadorAoVivo").innerText = 
        `Nosso amor já dura ${dias} dias, ${horas} horas e ${minutos} minutos! 💕`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

// 📌 Alterna entre modo claro e escuro
document.getElementById("toggleModo").addEventListener("click", function() {
    document.body.classList.toggle("claro");

    const botao = document.getElementById("toggleModo");
    botao.innerText = document.body.classList.contains("claro") ? "🌙 Modo Noturno" : "☀️ Modo Claro";
});

// 📌 Função para tocar ou pausar a música
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

// 📌 Frases românticas trocando automaticamente
const romanticMessages = [
    "Você é o meu sonho se tornando realidade.",
    "Cada momento ao seu lado é único e inesquecível.",
    "O nosso amor é mais forte que qualquer coisa.",
    "Sempre que eu olho para você, vejo meu futuro.",
    "Cada beijo seu é como uma nova descoberta.",
    "Com você, todo dia é especial.",
    "Você é a razão do meu sorriso.",
    "Eu te amo mais do que palavras podem expressar."
];

function displayRandomMessage() {
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    document.getElementById("romanticText").innerText = romanticMessages[randomIndex];
}
setInterval(displayRandomMessage, 5000);
displayRandomMessage();

// 📌 Função para criar corações caindo na tela
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "💖";

    coracao.style.left = Math.random() * 100 + "vw";  
    coracao.style.animationDuration = Math.random() * 3 + 2 + "s"; 

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

// Criar corações continuamente
setInterval(criarCoracao, 500);