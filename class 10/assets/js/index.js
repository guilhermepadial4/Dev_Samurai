const mainScope = () => {
    const h1Content = document.querySelector('.section__container');

    const zeroToLeft = (num) => {
        return num >= 10 ? num : `0${num}`;
    }

    const FormatDate = (date) => {
        const dateNow = new Date();
        const dayWeek = dateNow.getDay();
        const monthExtensive = date.getMonth();
        let dayWeekText;
        let monthText;

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
        }

        switch (monthExtensive) {
            case 0:
                monthText = 'Janeiro';
                break;

            case 1:
                monthText = 'Fevereiro';
                break;

            case 2:
                monthText = 'Março';
                break;

            case 3:
                monthText = 'Abril';
                break;

            case 4:
                monthText = 'Maio';
                break;

            case 5:
                monthText = 'Junho';
                break;

            case 6:
                monthText = 'Julho';
                break;

            case 7:
                monthText = 'Agosto';
                break;

            case 8:
                monthText = 'Setembro';
                break;

            case 9:
                monthText = 'Outubro';
                break;

            case 10:
                monthText = 'Novembro';
                break;

            case 11:
                monthText = 'Dezembro';
                break;
        }

        const day = zeroToLeft(date.getDate());
        const year = zeroToLeft(date.getFullYear());
        const hour = zeroToLeft(date.getHours());
        const minute = zeroToLeft(date.getMinutes());

        return `${dayWeekText}, ${day} de ${monthText} de ${year} </br> ${hour}:${minute} `;
    }

    const date = new Date();
    const dateBrazil = FormatDate(date);

    // console.log(getDate());
    h1Content.innerHTML = `<h1>${dateBrazil}</h1>`;
}

mainScope();
