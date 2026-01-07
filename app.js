const loginScreen = document.getElementById("login-screen");
const programScreen = document.getElementById("program-screen");
const loginBtn = document.getElementById("googleLoginBtn");

// Google login (redirect — стабільно)
loginBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
});

// Повернення після Google
firebase.auth().getRedirectResult()
  .then((result) => {
    if (result.user) {
      console.log("Успішний вхід:", result.user.email);
    }
  })
  .catch((error) => {
    console.error("Redirect error:", error);
  });

// Статус авторизації
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    loginScreen.classList.add("hidden");
    programScreen.classList.remove("hidden");
  }
});
