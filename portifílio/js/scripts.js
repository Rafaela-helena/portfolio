document.addEventListener('DOMContentLoaded', () => {
    // Mostrar mensagem de boas-vindas
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = 'Bem-vindo ao meu portfólio, eu sou [Seu Nome]';

    // Validação do formulário de contato
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formMessage.textContent = 'Mensagem enviada com sucesso!';
            formMessage.style.color = 'green';
        } else {
            formMessage.textContent = 'Por favor, preencha todos os campos.';
            formMessage.style.color = 'red';
        }
    });
});
