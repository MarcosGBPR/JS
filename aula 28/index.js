// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3, 20, 15, 14, 27); a, m, d, h, M, s, ms // mês começa do 0 no JS

// const data = new Date('2019/04/20 20:15:59.100')
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Sec', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function formataData(data) {
    console.log(data);
}

const data = new Date();
formataData(data);