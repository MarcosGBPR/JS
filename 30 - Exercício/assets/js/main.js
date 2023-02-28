const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
  let getDiaSemanaTexto;
  switch(diaSemana){
      case 0:
          getDiaSemanaTexto = 'Domingo';
          return getDiaSemanaTexto;
      case 1:
          getDiaSemanaTexto = 'Segunda-Feira';
          return getDiaSemanaTexto;
      case 2:
          getDiaSemanaTexto = 'Terça-Feira';
          return getDiaSemanaTexto;
      case 3:
          getDiaSemanaTexto = 'Quarta-Feira';
          return getDiaSemanaTexto;
      case 4:
          getDiaSemanaTexto = 'Quinta-Feira';
          return getDiaSemanaTexto;
      case 5:
          getDiaSemanaTexto = 'Sexta-Feira';
          return getDiaSemanaTexto;
      case 6:
          getDiaSemanaTexto = 'Sábado';
          return getDiaSemanaTexto;
      default:
        getDiaSemanaTexto = '';
        return getDiaSemanaTexto;
  }
}

function getNomeMes(numeroMes) {
  let nomeMes;
  switch(numeroMes){
      case 0:
          nomeMes = 'janeiro';
          return nomeMes;
      case 1:
          nomeMes = 'fevereiro';
          return nomeMes;
      case 2:
          nomeMes = 'março';
          return nomeMes;
      case 3:
          nomeMes = 'abril';
          return nomeMes;
      case 4:
          nomeMes = 'maio';
          return nomeMes;
      case 5:
          nomeMes = 'junho';
          return nomeMes;
      case 6:
          nomeMes = 'julho';
          return nomeMes;
      case 7:
          nomeMes = 'agosto';
          return nomeMes;
      case 8:
          nomeMes = 'setembro';
          return nomeMes;
      case 9:
          nomeMes = 'outubro';
          return nomeMes;
      case 10:
          nomeMes = 'novembro';
          return nomeMes;
      case 11:
          nomeMes = 'dezembro';
          return nomeMes;
  }
}
  

function criaData(data) {
  const diaSemana = data.getDat();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto();
  const nomeMes = getNomeMes();

}

innerHTML = criaData(data);