// function abrirIndice(){
//     document.getElementById("btn-activar-sidebar").style.width = "100%";
// }

// function cerrarIndice(){
//     document.getElementById("btm-sidebar").style.width = "0%";
// }

// function abrirIndice() {
//     // Mueve la barra lateral para que sea visible
//     document.getElementById("sidebar-id").style.right = "1000px";
//     // Opcional: Oculta el botón de apertura mientras la barra está abierta
//     document.getElementById("btn-activar-sidebar-id").style.display = "none";
// }

// function cerrarIndice() {
//     // Oculta la barra lateral moviéndola hacia la izquierda
//     document.getElementById("sidebar-id").style.left = "-250px";
//     // Opcional: Vuelve a mostrar el botón de apertura
//     document.getElementById("btn-activar-sidebar-id").style.display = "block";
// }

function cerrarIndice() {
    const sidebar = document.getElementById("sidebar-id");
    const btnActivarSidebar = document.getElementById("btn-activar-sidebar-id");

    // Ocultar la barra lateral y mostrar el botón >
    sidebar.style.display = "none";
    btnActivarSidebar.style.display = "block";
}

function abrirIndice() {
    const sidebar = document.getElementById("sidebar-id");
    const btnActivarSidebar = document.getElementById("btn-activar-sidebar-id");

    // Mostrar la barra lateral y ocultar el botón >

    sidebar.style.display = "block";
    btnActivarSidebar.style.display = "none";
}