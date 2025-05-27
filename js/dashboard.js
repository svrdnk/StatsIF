import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { auth } from "./firebase.js";

const SHEET_URL = "https://opensheet.elk.sh/1kTMLSuEuaxM-C1EzhUGccZdayDwFc4GbTSVD11s-j7M/Stats";

function render(data) {
  const makeLine = (label, value) => `<p><strong>${label}:</strong> ${value || "—"}</p>`;
  document.getElementById("app").innerHTML = `
    <h2>Привіт, ${data["Name"] || "користувачу"}!</h2>
    ${makeLine("Бонус", data["Бонус"])}
    ${makeLine("% перехід знайомств", data["% перехід знайомств"])}
    ${makeLine("% перехід юа", data["% перехід юа"])}
    ${makeLine("Депи за вчора", data["депи за вчора"])}
    ${makeLine("Виплати за вчора", data["виплати за вчора"])}
    ${makeLine("Тотал за місяць", data["тотал за місяць"])}
    ${makeLine("Нет за місяць", data["нет за місяць"])}
    ${makeLine("Кількість гравців", data["кількість гравців"])}
    ${makeLine("Штрафи", data["штрафи"])}
    ${makeLine("Кількість хвороб", data["кількість хвороб"])}
    ${makeLine("Кількість вихідних", data["кількість вихідних"])}
    ${makeLine("Кількість відпусток", data["кількість відпусток"])}
    <div style="text-align:right"><button onclick="logout()">Вийти</button></div>
  `;
}

window.logout = async function () {
  await signOut(auth);
  location.href = "/index.html";
};

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    location.href = "/index.html";
    return;
  }
  const res = await fetch(SHEET_URL);
  const data = await res.json();
  const found = data.find(row => row.mail === user.email);
  if (found) render(found);
  else document.getElementById("app").innerText = "Користувача не знайдено.";
});
