const dia = document.getElementById('dia');
const countdown = document.getElementById('countdown');

// Genereer automatisch dia-bestanden zoals Dia1.PNG t/m Dia250.PNG
const diaList = [];
const totalDiaCount = 250; // ← Pas dit aan aan het werkelijke aantal

for (let i = 1; i <= totalDiaCount; i++) {
    diaList.push(`img/Dia${i}.PNG`);
}

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