// Función para registrar un nuevo usuario
function registrarUsuario(nombre, email, password) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nombre, email, password, rol: 'visualizador' });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Event Listener para el formulario de registro
document.addEventListener('DOMContentLoaded', function() {
    const formRegistro = document.querySelector('#formRegistro');

    formRegistro.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        registrarUsuario(nombre, email, password);
        alert('Usuario registrado exitosamente');
        formRegistro.reset();
    });
});
