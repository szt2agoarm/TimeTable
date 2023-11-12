const daysOfWeek = [
    "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"
]
const dailyStuff = ['Programozás', 'Tanulás', 'Hobbi', 'Edzés', 'Pihenés', 'Kaja', 'Egyéb']

const scheduleContainer = document.getElementById("schedule");
const nightModeButton = document.getElementById("night-mode");

function createCard(day) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = document.createElement("h2");
    cardHeader.classList.add("card-header")
    cardHeader.textContent = day;

    card.appendChild(cardHeader);

    return card;
}
function createDailyStuff(){
    const card2 = document.createElement("div");
    card2.classList.add("card");
}

function renderSchedule() {
    scheduleContainer.innerHTML = "";
    daysOfWeek.forEach((day) => {
        const card = createCard(day);
        scheduleContainer.appendChild(card);
    });
}

nightModeButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
});

renderSchedule();