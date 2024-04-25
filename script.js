const form = document.getElementById('customerForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // mostramos un mensaje en la página
    message.innerText = `Cliente registrado: ${nombre}, ${cedula},${email}, ${telefono}`;
    form.reset();
});
