const designSheet = document.querySelector('#sheet');
const areaDesign = designSheet.getContext('2d');

let fieldWidth = 600;
let fieldHeight = 500;
let linedWidth = 5;
let ballWidth = 5;
let racketHeight = 50;


areaDesign.fillStyle = '#286047';
areaDesign.fillRect(0, 0, fieldWidth, fieldHeight);

areaDesign.fillStyle = '#fff';

areaDesign.fillRect(fieldHeightWidth/2 - linedWidth/2, 0, linedWidth, fieldHeight);

areaDesign.fillRect(0, 30, fieldWidth, racketHeight);

areaDesign.fillRect(fieldWidth - linedWidth, 300, fieldHeight, 50);

areaDesign.fillRect(30, 30, ballWidth, ballWidth);