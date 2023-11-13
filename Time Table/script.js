const daysOfWeek = [
    "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"
]
const dailyStuff = ['Programozás', 'Tanulás', 'Hobbi', 'Edzés', 'Pihenés', 'Kaja']

const scheduleContainer = document.getElementById("schedule");
const dailyStuffContainer = document.getElementById("dailyStuff");
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

function renderSchedule() {
    scheduleContainer.innerHTML = "";
    daysOfWeek.forEach((day) => {
        const card = createCard(day);
        scheduleContainer.appendChild(card);
    });
}

function createDailyStuff(){
    const card2 = document.createElement("div");
    card2.classList.add("card");

    const cardHeader2 = document.createElement("h2");
    cardHeader2.classList.add("card-header")
    cardHeader2.textContent = day2;

    card2.appendChild(cardHeader2);

    return card2;
}

function renderDailyStuff() {

    dailyStuffContainer.innerHTML = "";
    dailyStuff.forEach((day2) => {
        const card2 = createCard(day2);
        dailyStuffContainer.appendChild(card2);
    });
}


nightModeButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
});

renderSchedule();
renderDailyStuff();