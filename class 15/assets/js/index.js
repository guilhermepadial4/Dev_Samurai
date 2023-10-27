
const paragraph = document.querySelector('#paragraphs');
const ps = paragraph.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.body);
const backgroundColorBody = bodyStyle.backgroundColor;

console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}
