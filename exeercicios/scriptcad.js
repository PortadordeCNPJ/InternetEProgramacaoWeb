//Script para mostrar senha caso o usuario queira ve-lá

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

//FUNÇÃO PARA NÃO DEIXAR O USUARIO PASSAR O LOGIN COM OS CAMPOS EM BRANCO

function logar() {
    console.log(email)

}

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    var email = document.querySelector("#email").value
    var senha = document.querySelector("#senha").value
    var name = document.querySelector("#name").value
    var CPF = document.querySelector("#name").value

    if (email != "" && senha != "" && name != "" && CPF != "") {
        location = "index.html"
    }
});

