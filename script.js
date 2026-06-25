function chooseSeat(seatNumber) {

    let message = "";

    if (seatNumber === 1) {
        message = "Si, traje a Diavolo pero no invité a el resto de mis machos. ¿Por qué? Para no romperles el corazón y que piensen lo que no es (que me voy a compreter a ser fiel a mi futuro esposo).";
    }

    if (seatNumber === 2) {
        message = "Bien cerca de tu macho, que posesiva eres.";
    }

    if (seatNumber === 3) {
        message = "Este es el asiento reservado para Simon, o planeas sentarte en su regazo o robarle el asiento a tu propia pareja";
    }

    if (seatNumber === 4) {
        message = "Has elegido sentarte al lado de Samatoki, si saca un cigarrillo golpealo";
    }

    if (seatNumber === 5) {
        message = "Sentandote al lado de tu ex, que vil"
    }

     if (seatNumber === 6) {
        message = "Buena elección, dale un abrazo al niño sida de mi parte"
    }

     if (seatNumber === 7) {
        message = "Varka está aquí como seguridad, pero me gusta tu elección, yendo a por los grandotes"
    }

     if (seatNumber === 8) {
        message = "Gladiolus es otro de seguridad pero vaya y pase, puedes sostener su gran brazo mientras yo me someto a mi castigo"
    }

    document.getElementById("seat-message").textContent = message;
}

const cards = document.querySelectorAll(".flip-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});