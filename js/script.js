let users = [];

function openLoginModal() {
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
}

function openRegisterModal() {
    document.getElementById('register-modal').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('register-modal').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
    clearErrors();
}

function clearErrors() {
    document.getElementById('login-error').style.display = 'none';
    document.getElementById('register-error').style.display = 'none';
}

function register() {
    const nome = document.getElementById('register-nome').value;
    const senha = document.getElementById('register-senha').value;
    const errorMessage = document.getElementById('register-error');

    if (nome === '' || senha === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
    }

    const userExists = users.some(user => user.nome === nome);

    if (userExists) {
        errorMessage.textContent = 'Usuário já existe!';
        errorMessage.style.display = 'block';
    } else {
        users.push({ nome, senha });
        alert('Cadastro realizado com sucesso!');
        closeModal();
    }
}

function login() {
    const nome = document.getElementById('login-nome').value;
    const senha = document.getElementById('login-senha').value;
    const errorMessage = document.getElementById('login-error');

    if (nome === '' || senha === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
    }

    const user = users.find(user => user.nome === nome && user.senha === senha);

    if (user) {
        alert('Login bem-sucedido!');
        closeModal();
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
        errorMessage.style.display = 'block';
    }
}