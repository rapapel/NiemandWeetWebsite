const dia = document.getElementById('dia');
const countdown = document.getElementById('countdown');

// Voeg hier je dia-bestanden toe (behalve de welkomst-dia)
const diaList = [
    "img/dia1.png",
    "img/dia2.png",
    "img/dia3.png",
    "img/dia4.png",
    "img/dia5.png",
    "img/dia6.png",
    "img/dia7.png",
    "img/dia8.png"
];

let isCountdownRunning = false;

dia.addEventListener("click", () => {
    if (isCountdownRunning) return;

    isCountdownRunning = true;
    let count = 3;
    countdown.textContent = count;
    countdown.classList.remove("hidden");

    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            countdown.textContent = count;
        } else {
            clearInterval(interval);
            countdown.classList.add("hidden");
            showRandomDia();
            isCountdownRunning = false;
        }
    }, 1000);
});

function showRandomDia() {
    const randomIndex = Math.floor(Math.random() * diaList.length);
    dia.src = diaList[randomIndex];
}
