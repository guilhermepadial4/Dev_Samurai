import { validatorCpf } from "./validatorCPF.js";

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
        const passworldValid = this.passworlIsValid();

        if(fieldsCheck && passworldValid) {
            alert('Formulário enviado');
            this.form.submit();
        }
    }

    passworlIsValid() {
        let valid = true;

        const passworld = this.form.querySelector('.passworld');
        const repeatPassworld = this.form.querySelector('.repeat__passworld');

        if(passworld.value !== repeatPassworld.value) {
            this.createError(passworld, 'Campos Senha e Repetir Senha precisam ser iguais. ');
            this.createError(repeatPassworld, 'Campos Senha e Repetir Senha precisam ser iguais. ');
            valid = false
        }

        if(passworld.value.length < 6 || passworld.value.length > 13) {
            this.createError(passworld, 'Senha precisa ter entre 6 e 12 caracteres.');
            valid = false;
        }

        return valid;
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

            if(field.classList.contains('cpf')) {
                if(!this.validCpf(field)) valid = false;
            }

            if(field.classList.contains('user')) {
                if(!this.validUser(field)) valid = false;
            }
        }

        return valid;
    }

    validCpf(field) {
        const cpf = new validatorCpf(field.value);

        if(!cpf.valid()) {
            this.createError(field, 'CPF inválido.');
            return false
        }
        return true;
    }

    validUser(field) {
        const user = field.value;
        let valid = true;
        if(user.length < 3 || user.length > 12) {
            this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Nome de usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }


        return valid;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error__text');
        field.insertAdjacentElement('afterend', div);    
    }
}

const valida = new ValidaForm();
