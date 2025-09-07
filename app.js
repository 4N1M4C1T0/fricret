let nombres = [];

function agregarNombre() {
    const input = document.getElementById("nombreInput");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Debe ingresar texto");
        return;
    }

    nombres.push(nombre);
    mostrarNombres();
    input.value = "";
    input.focus();
}

function mostrarNombres() {
    const lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach((n) => {
        const li = document.createElement("li");
        li.textContent = n;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Debe ingresar al menos un nombre");
        return;
    }
    const randomIndex = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[randomIndex];
    alert("¡Amigo secreto encontrado!");
    document.getElementById("resultado").textContent =
        "Tu amigo secreto es: " + amigoSecreto;
}