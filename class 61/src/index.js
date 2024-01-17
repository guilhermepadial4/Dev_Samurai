import GeraCPF from './modules/geraCPF.js';

import './assets/css/reset.css';
import './assets/css/index.css';

(function() {
    const geranate = new GeraCPF();
    const cpfGenerate = document.querySelector('.result');
    cpfGenerate.innerHTML = geranate.generates();
})();
