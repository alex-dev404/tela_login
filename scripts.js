function entrar(){
    location.href ="index.html";
}
function entrar(){
    location.href ="home.html";
}
const passwordinput = document.querySelector("#passwordInput");
passwordinput.addEventListener("input", function(){
    const password = this.value;
    const bar = document.querySelector("#bar");
    const text = document.querySelector("#password-strenght");

    const strengths = {
        0: "Muito Fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito Forte",
    };
    let score = 0;
    // requisito
    if(password.lenght >= 8)score++;
    // LETRAs minusculas
    if(password.match(/[a-z]/))score++;
    // letras minusculas
    if(password.match(/[A-Z]/))score++;
    if(password.match(/[0-9]/))score++;
    // nenhum caract especial
    if(password.match(/[^a-zA-Z0-9]/))score++;
    // calcula %
    const width = (score/4)*100;
    bar.style.width = `${width}%`;
    // texto do indicador
    
    text.innerHTML = `Forca: ${strengths[score]}`;




});