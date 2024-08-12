const toggleSwitch = document.querySelector("label[for=toggle]");
const checkbox = document.getElementById("toggle");

window.addEventListener("load", () => {
  const isDarkMode = checkbox.checked;
  document.documentElement.classList.toggle("dark-mode", isDarkMode);
  toggleSwitch.childNodes[0].textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

toggleSwitch.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    const isDarkMode = checkbox.checked;

    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    toggleSwitch.childNodes[0].textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  },
  true
);

// Función para formatear la fecha y la hora
function formatDateTime(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan desde 0
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// Función para mostrar la fecha y la hora actual en el HTML
function displayCurrentDateTime() {
  const currentDate = new Date();
  const formattedDate = formatDateTime(currentDate);
  document.getElementById('current-date-time').textContent = formattedDate;
}

// Actualizar la fecha y hora cada segundo
setInterval(displayCurrentDateTime, 1000);

// Llamar a la función inmediatamente para mostrar la fecha y hora al cargar la página
displayCurrentDateTime();

