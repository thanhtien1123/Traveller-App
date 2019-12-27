import './styles/main.scss';
import {fetchAPI} from './js/fetchAPI';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchAPI();
})