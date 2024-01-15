// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => createPersonPage(json));

axios('pessoas.json')
    .then(response => createPersonPage(response.data));

const createPersonPage = (json) => {
    const result = document.querySelector('.result');
    const table = document.createElement('table');

    for (let person of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = person.nome;
        tr.append(td);

        td = document.createElement('td');
        td.innerHTML = person.idade;
        tr.append(td);

        td = document.createElement('td');
        td.innerHTML = person.salario;
        tr.append(td);

        table.append(tr);

        result.append(table);
    }
}