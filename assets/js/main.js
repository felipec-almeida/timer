function mostraHorario(segundos) {
  const data = new Date(segundos * 1000);

  return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
}

const timer = document.querySelector(".timer");
console.log(timer);
const iniciarTimer = document.querySelector(".inicia-timer");
const pausarTimer = document.querySelector(".pausa-timer");
const zeraTimer = document.querySelector(".zera-timer");
let segundos = 0;
let timerGeral;

function iniciaTimer() {
  timerGeral = setInterval(function () {
    segundos++;
    timer.innerHTML = mostraHorario(segundos);
  }, 1000);
}

iniciarTimer.addEventListener("click", function (evento) {
  iniciaTimer();
});

pausarTimer.addEventListener("click", function (evento) {
  setTimeout(function () {
    timer.classList.add('timer-pausado');
    clearInterval(timerGeral);
  });
});

zeraTimer.addEventListener("click", function (evento) {
  setTimeout(function () {
    timer.classList.remove('timer-pausado');
    clearInterval(timerGeral);
    timer.innerHTML = '00:00:00';
  });
});
