const loginScreen = document.getElementById("login-screen");
const programScreen = document.getElementById("program-screen");
const loginBtn = document.getElementById("googleLoginBtn");

// тимчасова імітація логіну
loginBtn.addEventListener("click", () => {
  loginScreen.classList.add("hidden");
  programScreen.classList.remove("hidden");
});
