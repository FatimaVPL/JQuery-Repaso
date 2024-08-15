$(document).ready(function() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds}`;
        $('#reloj').text(timeString);
    }

    // Actualiza el reloj cada segundo
    setInterval(updateClock, 1000);

    // Inicializa el reloj al cargar la página
    updateClock();
});
