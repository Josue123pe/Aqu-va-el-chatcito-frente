// URL de la API de Render
const API_URL = "https://chatcito-3-3.onrender.com";

// Función para enviar un mensaje
async function enviarMensaje() {
  const mensaje = document.getElementById("chatInput").value.trim();
  if (!mensaje) return;

  // Mostrar el mensaje enviado en el chatbox
  mostrarMensaje(mensaje, "user");

  // Enviar mensaje al backend (Render)
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ mensaje })
  });

  const data = await response.json();

  if (data.respuesta) {
    mostrarMensaje(data.respuesta, "bot");
  } else {
    mostrarMensaje("Hubo un problema, intenta de nuevo.", "bot");
  }

  // Limpiar el input
  document.getElementById("chatInput").value = '';
}

// Mostrar el mensaje en el chatbox
function mostrarMensaje(mensaje, quien) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement('div');
  msg.textContent = mensaje;
  msg.classList.add(quien);  // Añadir clase 'user' o 'bot'
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}


