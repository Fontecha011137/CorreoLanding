// Esperar a que cargue toda la página
document.addEventListener("DOMContentLoaded", () => {

  // Seleccionar todos los formularios
  const formularios = document.querySelectorAll("form");

  // Recorrer formularios
  formularios.forEach(form => {

    form.addEventListener("submit", () => {

      // Mensaje de confirmación
      alert("✨ Gracias por suscribirte a BELLEZA");

    });

  });

});