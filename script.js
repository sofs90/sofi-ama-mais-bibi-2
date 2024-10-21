// Função que muda a cor do texto, exibe o coração e oculta o texto principal
function changeTextAndShowHeart() {
    const loveMessage = document.getElementById('loveMessage');
    const instruction = document.getElementById('instruction');
    const heartSection = document.getElementById('heartSection');
    
    loveMessage.addEventListener('click', function() {
        const newColor = getRandomColor();
        loveMessage.style.color = newColor;
        loveMessage.style.borderBottomColor = newColor;

        // Oculta o texto de instrução
        instruction.style.opacity = '0';
        setTimeout(() => {
            instruction.style.display = 'none';
        }, 300);

        // Desaparece o texto "te amo mais que tudo!" com transição
        loveMessage.style.opacity = '0';
        setTimeout(() => {
            loveMessage.style.display = 'none';
        }, 500);

        // Exibe o coração pulsante
        heartSection.style.display = 'flex';
    });
}

// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Chama a função ao carregar a página
window.onload = changeTextAndShowHeart;
