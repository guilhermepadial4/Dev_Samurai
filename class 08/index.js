const zeroToLeft = (num) => {
    return num >= 10 ? num : `0${num}`;
}

const FormatDate = (date) => {
    const day = zeroToLeft(date.getDate());
    const month = zeroToLeft(date.getMonth());
    const year = zeroToLeft(date.getFullYear());
    const hour = zeroToLeft(date.getHours());
    const minute = zeroToLeft(date.getMinutes());
    const second = zeroToLeft(date.getSeconds());

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

const date = new Date();
const dateBrazil = FormatDate(date);
console.log(dateBrazil);
