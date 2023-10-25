const date = new Date();
const dayWeek = date.getDay();
let dayWeekText;

switch (dayWeek) {
    case 0:
        dayWeekText = 'Domingo';
        break;

    case 1:
        dayWeekText = 'Segunda-feira';
        break;

    case 2:
        dayWeekText = 'Terça-feira';
        break;
    
    case 3:
        dayWeekText = 'Quarta-feira';
        break;
    
    case 4:
        dayWeekText = 'Quinta-feira';
        break;

    case 5:
        dayWeekText = 'Sexta-feira';
        break;

    case 6:
        dayWeekText = 'Sabádo';
        break;

    default:
        dayWeekText = 'Dia da semana inválido';
        break;
}

console.log(dayWeek, dayWeekText);
