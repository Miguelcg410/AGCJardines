// Este script permite el desplazamiento suave (smooth scrolling)
// cuando haces clic en los enlaces de la barra de navegación que apuntan a secciones (#services, #contact).
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del ancla

        // Obtiene el elemento al que apunta el enlace (ej: #services)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Desplaza la vista a ese elemento con un comportamiento suave
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Podrías añadir aquí más interactividad si la necesitaras en el futuro,
// como un botón "volver arriba" o efectos de aparición al hacer scroll.