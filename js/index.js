const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn = document.getElementById("btn");
const cont = document.querySelector(".container");
const msg = document.querySelector(".msg");
const painel = document.querySelector(".calc");

function mostra(screen) {
    document.querySelector(".texto").innerHTML = screen;
}

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let altura = num1.value;
    let peso = num2.value;
    let imc = peso / (altura * altura);

    if (Math.round(imc) >= 35) {
        painel.style.color = "#DB5A5A";
        msg.style.color = "#DB5A5A";
        msg.innerHTML = "Seu IMC está acima do recomendado!";
        mostra(`Você está com <span style="color: #DB5A5A;">${Math.round(imc)}</span> de imc.`);
    } else {
        if (Math.round(imc) >= 18.5) {
            painel.style.color = "#4ECA64";
            cont.style.border = "2px solid #4ECA64";
            msg.style.color = "#4ECA64";
            msg.innerHTML = "Seu IMC está excelente!";
            mostra(`Você está com <span style="color: #4ECA64;">${Math.round(imc)}</span> de imc.`)
        } else {
            if (Math.round(imc) <= 18.5) {
                cont.style.border = "2px solid #DB5A5A";
                painel.style.color = "#DB5A5A";
                msg.style.color = "#DB5A5A";
                msg.innerHTML = "Seu IMC está abaixo do recomendado!";
                mostra(`Você está com <span style="color: #DB5A5A;">${Math.round(imc)}</span> de imc.`);
            }
        }
    }
}) 