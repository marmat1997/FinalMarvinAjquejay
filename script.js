const statusDisplay = document.getElementById('connection-status');

if (statusDisplay) {
    statusDisplay.textContent = '¡HTML, CSS, and JavaScript connected!';
} else {
    console.error("Element with ID 'connection-status' not found.");
}
// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});