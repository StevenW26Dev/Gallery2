document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las imágenes de la galería
    const images = document.querySelectorAll('.gallery img');

    // Añade el atributo tabindex a todas las imágenes
    images.forEach(img => {
        img.setAttribute('tabindex', '0');
    });

    // Maneja el evento de carga de la página
    console.log('Página cargada y lista.');

    // Maneja el evento de movimiento del ratón sobre las imágenes
    images.forEach(img => {
        img.addEventListener('mouseover', (event) => {
            console.log('Ratón sobre:', event.target.alt);
        });
    });

    // Maneja el evento de teclado para mejorar la accesibilidad
    images.forEach(img => {
        img.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                alert(`Imagen seleccionada: ${event.target.alt}`);
            }
        });
    });
});
