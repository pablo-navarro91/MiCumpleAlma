/* ===== CUENTA REGRESIVA ===== */
    // Configura la fecha del evento (formato: YYYY-MM-DDTHH:MM:SS)
    const eventDate = new Date("2025-04-12T21:30:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }
    setInterval(updateCountdown, 1000);
    
  
  /* ===== MODAL DEL FORMULARIO ===== */
  const reserveBtn = document.getElementById("reserveBtn");
  const modal = document.getElementById("reservationForm");
  const closeBtn = document.querySelector(".close");

  reserveBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Selecciona el formulario dentro del modal
  const form = document.querySelector("#reservationForm form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el envío por defecto

    // Recoge los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const mayores = document.getElementById("mayores").value;
    const menores = document.getElementById("menores").value;
    const mesa = document.getElementById("mesa").value;
    const datos = document.getElementById("datos").value;

    // Construye el mensaje para WhatsApp (usa %0A para salto de línea)
    let mensaje = "Reserva de Entrada%0A";
    mensaje += "Nombre: " + nombre + "%0A";
    mensaje += "Apellido: " + apellido + "%0A";
    mensaje += "Cantidad de Mayores: " + mayores + "%0A";
    mensaje += "Cantidad de Menores: " + menores + "%0A";
    mensaje += "Cantidad de Mesa Principal: " + mesa + "%0A";
    mensaje += "Datos: " + datos;

    // Número de WhatsApp (formato internacional sin el símbolo '+')
    const numeroWhatsApp = "5493534084648"; // Reemplaza con el número real

    // Construye la URL para enviar el mensaje
    const urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroWhatsApp + "&text=" + mensaje;

    // Abre WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, "_blank");
  });
