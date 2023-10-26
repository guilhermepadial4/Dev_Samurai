const mainScope = () => {

    const elements = [
        {tag: 'p', text: 'word 1'},
        {tag: 'div', text: 'word 2'},
        {tag: 'footer', text: 'word 3'},
        {tag: 'section', text: 'word 4'},
    ]

    const container = document.querySelector('#section__container');
    const div = document.createElement('div');


    for (let i = 0; i < elements.length; i++) {
        let { tag, text } = elements[i];
        let createTag = document.createElement(tag);
        createTag.innerHTML = text;
        div.appendChild(createTag);
    }
    container.appendChild(div);
}

mainScope();
