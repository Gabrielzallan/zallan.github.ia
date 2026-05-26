// Efeito de máquina de escrever no título
const texto = "Desenvolvedor de sites para pequenas empresas com valores acessíveis 🚀";
const elemento = document.getElementById("texto-maquina");
let indice = 0;

function escrever() {
    if (indice < texto.length) {
        elemento.textContent += texto.charAt(indice);
        indice++;
        setTimeout(escrever, 70);
    }
}

window.addEventListener('load', () => {
    elemento.textContent = "";
    setTimeout(escrever, 500);
});

// Efeito de brilho ao rolar a página
document.addEventListener('scroll', () => {
    const nav = document.querySelector('.barra-navegacao');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 20px rgba(0, 238, 255, 0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// Efeito de iluminação nos cards ao passar o mouse
document.querySelectorAll('.card-servico, .card-plano').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 238, 255, 0.1), transparent 70%)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.background = "";
    });
});
