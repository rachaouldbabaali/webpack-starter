import generateJoks from './generateJoks.js';
import './styles/main.scss';
import icon from './assets/favicon.png';

generateJoks();
const img = document.createElement('img');
img.src = icon;
document.body.appendChild(img);