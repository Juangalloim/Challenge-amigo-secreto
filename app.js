let amigos = [];

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert('Por favor, ingresa un nombre');
        return;
    }
    if (amigos.includes(nombre)) {
        alert('El nombre ya ha sido ingresado, ingresa uno diferente');
        return;
    }
    amigos.push(nombre);
    nombreInput.value = "";
    nombreInput.focus();
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El ganador es: <strong>${ganador}</strong></li>`;
    // Terminar el juego: limpiar la lista y deshabilitar botones
    amigos = [];
    mostrarLista();
    document.getElementById('amigo').disabled = true;
    // Deshabilitar todos los botones de la sección
    document.querySelectorAll('button').forEach(btn => btn.disabled = true);
}

function resetear() {
    amigos = [];
    mostrarLista();
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('amigo').disabled = false;
    document.querySelectorAll('button').forEach(btn => btn.disabled = false);
}
