
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(async element => {
      const file = element.getAttribute('data-include');
      let path = "";
      if (location.pathname.includes("/pages/")) {
        path = "../components/";
      } else {
        path = "components/";
      }
  
      try {
        const response = await fetch(path + file);
        if (response.ok) {
          element.innerHTML = await response.text();
        } else {
          element.innerHTML = "Contenido no encontrado";
        }
      } catch (e) {
        element.innerHTML = "Error al cargar el contenido";
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", includeHTML);
  