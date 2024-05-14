// script.js
function mostrarMensaje() {
  alert("¡La conexión entre HTML, CSS y JavaScript funciona correctamente!");
}
const imagenes = document.querySelectorAll('.proyecto img');

imagenes.forEach(imagen => {
  imagen.addEventListener('click', (event) => {
    event.preventDefault();
    imagen.classList.add('imagen-ampliada');

    // Opcional: agregar superposición
    const overlayAmpliado = document.querySelector('.overlay-ampliado');
    if (overlayAmpliado) {
      overlayAmpliado.classList.add('overlay-ampliado-activo');
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('imagen-ampliada')) {
    imagenes.forEach(imagen => {
      imagen.classList.remove('imagen-ampliada');
    });

    // Opcional: eliminar superposición
    const overlayAmpliado = document.querySelector('.overlay-ampliado');
    if (overlayAmpliado) {
      overlayAmpliado.classList.remove('overlay-ampliado-activo');
    }
  }
});
