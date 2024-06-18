const ventanaMovil = document.getElementById('ventana-movil');
const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');

// Función para mover la ventana alejándose del botón "No"
function moverAlejarseNo() {
  const ventanaWidth = window.innerWidth - ventanaMovil.offsetWidth;
  const ventanaHeight = window.innerHeight - ventanaMovil.offsetHeight - btnNo.offsetHeight - 20; // Separación adicional
  const left = Math.random() * ventanaWidth;
  const top = Math.random() * ventanaHeight;
  ventanaMovil.style.left = `${left}px`;
  ventanaMovil.style.top = `${top}px`;
}

// Mostrar la ventana y hacerla móvil
ventanaMovil.style.display = 'block';
moverAlejarseNo();

// Agregar eventos al botón "Sí"
btnSi.addEventListener('click', () => {
  alert('¡Está bien mi mor Sibe!');
});

// Agregar eventos al botón "No"
btnNo.addEventListener('mouseover', () => {
  moverAlejarseNo();
});

btnNo.addEventListener('click', () => {
  // Evitar que el botón "No" realice alguna acción cuando se hace clic en él
  event.stopPropagation();
});

// Agregar evento de detección de cursor cerca del botón "Sí"
window.addEventListener('mousemove', (event) => {
  const rect = btnSi.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const isInButtonArea = mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;
  if (isInButtonArea) {
    ventanaMovil.classList.remove('animated'); // Detener la animación
  } else {
    ventanaMovil.classList.add('animated'); // Reiniciar la animación
  }
});
