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
        const fieldsCheck = this.checkFields();
    }

    checkFields() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error__text')) {
            errorText.remove();
        }

        for(let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText;
            
            if(!field.value) {
                this.createError(field, `O campo "${label}" não pode estar em branco.`);
                valid = false;
            }
        }
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error__text');
        field.insertAdjacentElement('afterend', div);    
    }
}

const valida = new ValidaForm();
