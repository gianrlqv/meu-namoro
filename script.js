// Atualiza o contador ao vivo do relacionamento
function atualizarContador() {
    const dataInicio = new Date("2022-02-10T00:00:00"); // Alterar para a data real do namoro
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contadorAoVivo").innerText = 
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos de amor!`;
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