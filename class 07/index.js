const userScore = 1000;
const userLevel = userScore >= 1000 ? 'User Vip' : 'User Normal'; 

const userColor = null;
const colorDefault = userColor || 'Purple';

console.log(userLevel, colorDefault);
