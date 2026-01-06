const loginScreen = document.getElementById("login-screen");
const programScreen = document.getElementById("program-screen");
const loginBtn = document.getElementById("googleLoginBtn");

loginBtn.addEventListener("click", async () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    alert("Помилка входу");
    console.error(error);
  }
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    loginScreen.classList.add("hidden");
    programScreen.classList.remove("hidden");
  }
});
