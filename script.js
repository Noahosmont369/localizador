function actualizarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString('es-PE');
  const fecha = ahora.toLocaleDateString('es-PE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById('hora').textContent = hora;
  document.getElementById('fecha').textContent = fecha;
}

// Llamar cada segundo para actualizar la hora
setInterval(actualizarHora, 1000);
actualizarHora();

// Obtener ubicación geográfica
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (posicion) => {
      const lat = posicion.coords.latitude.toFixed(4);
      const lon = posicion.coords.longitude.toFixed(4);
      document.getElementById('ubicacion').textContent = `Tu ubicación: Lat ${lat}, Lon ${lon}`;
    },
    (error) => {
      document.getElementById('ubicacion').textContent = "No se pudo obtener la ubicación.";
    }
  );
} else {
  document.getElementById('ubicacion').textContent = "Geolocalización no compatible.";
}
