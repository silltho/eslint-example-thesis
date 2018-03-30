import {hello} from './helpers';

let elem = document.getElementById('output');
elem.innerHTML = `Output: ${hello()}`;