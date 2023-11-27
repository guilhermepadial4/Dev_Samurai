class ValidaForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', evt => {
            this.handleSubmit(evt);
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        console.log('Formulário não enviado');
    }
}

const valida = new ValidaForm();
