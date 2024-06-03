function openModal() {
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
}

function login() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var errorMessage = document.getElementById('login-error');

    if (nome === '' || senha === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
    }

    if (nome === 'admin' && senha === 'admin') {
        alert('Login bem-sucedido!');
        closeModal();
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
        errorMessage.style.display = 'block';
    }
}