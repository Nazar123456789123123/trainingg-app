const loginScreen = document.getElementById("login-screen");
const programScreen = document.getElementById("program-screen");
const loginBtn = document.getElementById("googleLoginBtn");

loginBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
});

firebase.auth().getRedirectResult()
  .then((result) => {
    if (result.user) {
      console.log("Успішний вхід:", result.user.email);
    }
  })
  .catch((error) => {
    console.error("Redirect error:", error);
  });

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    loginScreen.classList.add("hidden");
    programScreen.classList.remove("hidden");
  }
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    loginScreen.classList.add("hidden");
    programScreen.classList.remove("hidden");
  }
});
