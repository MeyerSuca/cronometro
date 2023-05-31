let btnStart = document.querySelector("#start");
let btnPause = document.querySelector("#pause");
let btnRestart = document.querySelector("#restart");
let botonPause = false;

let cronometro = "";


function start() {
    let contador_s = 0;
    let contador_m = 0;
    s = document.querySelector("#seconds");
    m = document.querySelector("#minutes");
    h = document.querySelector("#hours");
    s.textContent = "00";
    m.textContent = "00";
    h.textContent = "00";

    cronometro = setInterval(function () {
        contador_s++;
        if (contador_s == 60) {
            contador_s = 0;
            contador_m++;
            if (contador_m < 10) {
                m.textContent = "0" + contador_m;
            } else {
                m.textContent = contador_m;
            }

            if (contador_m == 60) {
                contador_m = 0;
            }
        }
        if (contador_s < 10) {
            s.textContent = "0" + contador_s;
        } else {
            s.textContent = contador_s;
        }

    }, 1000);
}
function pause() {
    botonPause = true;
    clearInterval(cronometro);
    if (botonPause = true) {
        btnPause.textContent = "continuar";
    }
}

function restart() {
    /*------falta------*/
}

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnRestart.addEventListener("click", restart);