function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timezone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seconds = 0;
let timer0;

function startTimer() {
    const timer = setInterval(function() {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    startTimer();
});

pausar.addEventListener('click', function(event) {
    alert('Cliquei no pausar');
});

zerar.addEventListener('click', function(event) {
    alert('Cliquei no zerar');
});