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

    if (email != "" && senha != "" && name != "") {
        
        location = "index.html"
    }
});

//FUNÇÃO PARA USAR APENAS NÚMEROS NO CPF



