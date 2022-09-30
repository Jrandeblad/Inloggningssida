// Sätter värden att kolla inloggningen mot.
const correctUserName = "Sara";
const correctPassword = "qwe123";
// Byter vilka element som ska visas på login-sidan.
function switchToLoginPage() {
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("logIn").style.display = "flex";
    document.getElementById("header").style.display = "none";
}
// Byter vilka element som ska visas på sidan när det blev fel användarnamn/lösenord.
function switchToTryAgainPage() {
    document.getElementById("tryAgain").style.display = "flex";
    document.getElementById("logIn").style.display = "none";
    document.getElementById("header").style.display = "none";
}
// Byter vilka element som ska visas på sidan vid korrekt inloggning.
function switchToMainPage() {
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("logIn").style.display = "none";
    document.getElementById("header").style.display = "flex";
}
// Skapar ett style-element och ändrar det för att ändra bakgrundens genomskinlighetsgrad.
function changeOpacity(x) {
    var styleElem = document.body.appendChild(document.createElement("style"));
    styleElem.innerHTML = `#main::before {opacity: ${x}}`; 
}
// Sätter ett välkomstmeddelande till användaren.
function setWelcomeMessage() {
    document.getElementById("welcomeMessage").innerText = `Simsällskapet - Välkommen in ${localStorage.getItem("userName")}!`;
}
// Sparar ner data från formuläret till local storage.
function setFormData() {
    localStorage.setItem("userName", document.getElementById("userName").value);
    localStorage.setItem("password", document.getElementById("password").value);
}
// Kollar om värdena i localstorage är samma som de korrekta login-uppgifterna. Returnerar true om sant och false om falskt.
function checkLogin() {
    if (localStorage.getItem("userName") === correctUserName && localStorage.getItem("password") === correctPassword) {
        return true;
    }
    else {
        return false;
    }
}
// Sparar data från inloggnings-formuläret. Kollar om inloggningsuppgifterna är korrekta. I så fall byter till main-page, tar bort genomskinlighet på bakgrunden och sätter välkomstmeddelande. Annars byter till försök-igen-sidan.
function logIn() {
    setFormData();
    if (checkLogin()) {
        switchToMainPage();
        changeOpacity(1);
        setWelcomeMessage();
    }
    else {
        switchToTryAgainPage();
    }
}
// Rensar localstorage, byter till login-sidan och ökar bakgrundens genomskinlighet.
function logOut() {
    localStorage.clear();
    switchToLoginPage();
    changeOpacity(0.85);
}
// Kollar om användaren redan är inloggad och skickar den till huvudsidan direkt isf, annars skickas till login-sidan
function alreadyLoggedIn() {
    if (checkLogin()) {
        switchToMainPage();
        changeOpacity(1);
        setWelcomeMessage();
    }
    else {
        switchToLoginPage();
    }
}
// Kör funktionen för att kolla om man är inloggad så fort sidan laddas.
alreadyLoggedIn();
// Vid klick på login-button så körs logIn-funktionen.
loginButton.onclick = function() {
    logIn();
}
// Vid klick på try-again-button så byter man till login-sidan.
tryAgainButton.onclick = function() {
    switchToLoginPage();
}
// Vid klick på logout-button så körs logOut-funktionen.
logOutButton.onclick = function() {
    logOut();
}
