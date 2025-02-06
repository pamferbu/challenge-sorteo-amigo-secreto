let nombres = []

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    // 1. obtener la referencia del input
    const elemento = document.getElementById("amigo")
    // 2. obtener el valor del input
    const nombre = elemento.value

    if (nombre === "") {
        alert("Para continuar, debe ingresar un nombre")
    } else {

        actualizarListaAmigos(nombre)
        // 3. limpiar el valor del input
        elemento.value = ""
        // 4. almacenando nombres en el array.`
        nombres.push(nombre)

    }
}

function actualizarListaAmigos(nombre) {
        // 3. Obtener la referencia de la lista donde se pondrán los nombres
        const lista  = document.getElementById("listaAmigos")
        // 4. creando li dinamico
        const li = document.createElement("li")
        li.innerHTML = nombre
        lista.appendChild(li)
}

function sortearAmigo() {
    const posicionGanador= Math.floor(Math.random() * (nombres.length - 1))
    const nombreGanador = nombres[posicionGanador]

    const lista  = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    const resultado = document.getElementById("resultado")
    resultado.innerHTML = nombreGanador

}