const todayDate = new Date();
const divJour = document.querySelector(".calendar__jour");
const divChiffre = document.querySelector(".calendar__chiffre");
const divMois = document.querySelector(".calendar__mois");
const divAnne = document.querySelector(".calendar__annee");
const divHeure = document.querySelector(".calendar__heure");

function createDate() {
  const dateStr = todayDate.toLocaleString('en-US', { weekday: 'short' });
  const jour = document.createElement("p");
  jour.classList.add('calendar__joure');
  divJour.appendChild(jour);
  jour.textContent = dateStr;
}

function createDay() {
  const dayStr = todayDate.toLocaleString('en-US', { day: '2-digit' });
  const day = document.createElement("p");
  day.classList.add('calendar__day');
  divChiffre.appendChild(day);
  day.textContent = dayStr;
}

function createMonth() {
  const dayStr = todayDate.toLocaleString('en-US', { month: 'long' });
  const day = document.createElement("p");
  day.classList.add('calendar__month');
  divMois.appendChild(day);
  day.textContent = dayStr;
}

function createYear() {
  const dayStr = todayDate.toLocaleString('en-US', { year: 'numeric' });
  const day = document.createElement("p");
  day.classList.add('calendar__Year');
  divAnne.appendChild(day);
  day.textContent = dayStr;
}

function createTime() {
  const timeStr = todayDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
  const time = document.createElement("p");
  time.classList.add('calendar__time');
  divHeure.appendChild(time);
  time.textContent = timeStr;
  
  setInterval(() => {
    const now = new Date();
    const timeStr = now.toLocaleString('fr-EU', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
    time.textContent = timeStr;
  }, 1000);
}

createDate();
createDay();
createMonth();
createYear();
createTime();
