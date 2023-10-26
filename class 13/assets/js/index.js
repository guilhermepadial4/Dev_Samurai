const mainScope = () => {
    const container = document.querySelector('#section__container');

    const div = document.createElement('div');
    container.appendChild(div);

    const elements = [
        {tag: 'p', text: 'word 1'},
        {tag: 'div', text: 'word 2'},
        {tag: 'footer', text: 'word 3'},
        {tag: 'section', text: 'word 4'},
    ]
}

mainScope();