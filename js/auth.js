import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { auth } from "./firebase.js";

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    location.href = "/dashboard.html";
  } catch (e) {
    alert("Помилка входу: " + e.message);
  }
};
