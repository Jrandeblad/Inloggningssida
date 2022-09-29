const correctUserName = "Sara";
const correctPassword = "qwe123";
const loginButton = document.getElementById("loginButton");

function redanInloggad() {
    if (localStorage.getItem("userName") === correctUserName && localStorage.getItem("password") === correctPassword) {
        loggaIn();
    }    else {
        document.getElementById("felLogIn").style.display = "none";
    }

}

function loggaIn() {
    document.getElementById("logIn").style.display = "none";
    document.getElementById("header").style.display = "flex";
    var styleElem = document.body.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#background::before {opacity: 1}";   
    document.getElementById("simhallen").innerText += ` - Välkommen in ${localStorage.getItem("userName")}!`;
    document.getElementById("felLogIn").style.display = "none";
}

function loggaUt() {
    localStorage.clear();
    document.getElementById("logIn").style.display = "flex";
    document.getElementById("header").style.display = "none";
    var styleElem = document.body.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#background::before {opacity: 0.85}";
    document.getElementById("simhallen").innerText = "Simhallens hemsida"
    document.getElementById("felLogIn").style.display = "none";
}

redanInloggad();

loginButton.onclick = function() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    if (userName === correctUserName && password === correctPassword) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("password", password);
        loggaIn();
       // document. = `Välkommen till simhallens sida ${userName}`
    }
    else {
        document.getElementById("felLogIn").style.display = "flex";
        document.getElementById("logIn").style.display = "none";
    }
}

forsokIgenButton.onclick = function() {
    document.getElementById("felLogIn").style.display = "none";
    document.getElementById("logIn").style.display = "flex";
}

logOutButton.onclick = function() {
    localStorage.clear();
    loggaUt();
}
