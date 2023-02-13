function getDiaSemanaTexto(diaSemana) {
    let getDiaSemanaTexto;
    switch(diaSemana){
        case 0:
            getDiaSemanaTexto = 'Domingo';
            return getDiaSemanaTexto;
        case 1:
            getDiaSemanaTexto = 'Segunda';
            return getDiaSemanaTexto;
        case 2:
            getDiaSemanaTexto = 'Terça';
            return getDiaSemanaTexto;
        case 3:
            getDiaSemanaTexto = 'Quarta';
            return getDiaSemanaTexto;
        case 4:
            getDiaSemanaTexto = 'Quinta';
            return getDiaSemanaTexto;
        case 5:
            getDiaSemanaTexto = 'Sexta';
            return getDiaSemanaTexto;
        case 6:
            getDiaSemanaTexto = 'Sábado';
            return getDiaSemanaTexto;
    }
}

h1.innerHTML = getDiaSemanaTexto();