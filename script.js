const correctUserName = "Sara";
const correctPassword = "qwe123";

function switchToLoginPage() {
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("logIn").style.display = "flex";
    document.getElementById("header").style.display = "none";
}

function switchToTryAgainPage() {
    document.getElementById("tryAgain").style.display = "flex";
    document.getElementById("logIn").style.display = "none";
    document.getElementById("header").style.display = "none";
}

function switchToMainPage() {
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("logIn").style.display = "none";
    document.getElementById("header").style.display = "flex";
}

function changeOpacity(x) {
    var styleElem = document.body.appendChild(document.createElement("style"));
    styleElem.innerHTML = `#main::before {opacity: ${x}}`; 
}

function setWelcomeMessage() {
    document.getElementById("welcomeMessage").innerText = `Simsällskapet - Välkommen in ${localStorage.getItem("userName")}!`;
}

function setFormData() {
    localStorage.setItem("userName", document.getElementById("userName").value);
    localStorage.setItem("password", document.getElementById("password").value);
}

function checkLogin() {
    if (localStorage.getItem("userName") === correctUserName && localStorage.getItem("password") === correctPassword) {
        return true;
    }
    else {
        return false;
    }
}

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

function logOut() {
    localStorage.clear();
    switchToLoginPage();
    changeOpacity(0.85);
}

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

alreadyLoggedIn();

loginButton.onclick = function() {
    logIn();
}

tryAgainButton.onclick = function() {
    switchToLoginPage();
}

logOutButton.onclick = function() {
    logOut();
}
