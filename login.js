function login(event) {
    event.preventDefault(); // Evita o envio do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const authenticatedUser = users.find(user => user.username === username && user.password === password);
    if (authenticatedUser) {
      alert(`Bem-vindo, ${authenticatedUser.username}!`);
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }

  function register(event) {
    event.preventDefault(); // Evita o envio do formulário
    const newUsername = document.getElementById('new_username').value;
    const newPassword = document.getElementById('new_password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === newUsername);
    if (existingUser) {
      alert('Este nome de usuário já existe. Por favor, escolha outro.');
    } else {
      const newUser = { username: newUsername, password: newPassword };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Usuário registrado com sucesso.');
    }
  }
  
  localStorage.setItem('usuarios', JSON.stringify({}));
  