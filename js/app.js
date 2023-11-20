document.addEventListener("DOMContentLoaded", () => {
 
  // Función para obtener el año actual
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  // Actualiza el año actual
  document.getElementById("current-year").textContent = getCurrentYear();


});
