// Ponto de entrada do JavaScript. tudo que tiver referenciado será processado

import funcao2 from './modulo2'; // JS
import creditos from './markup/_creditos.html'; // HTML
import imagemBase64 from './assets/template.png'; // Imagem (processada como base64)
import './styles/global.css'; // CSS
import './styles/index.scss'; // Sass

console.log('Iniciando...');

document.getElementById('creditos').innerHTML = creditos;

const tagImg = new Image();
tagImg.src = imagemBase64;
document.getElementById('template').appendChild(tagImg);

console.loG('COMANDO COM ERRO, DE PROPÓSITO'); // Comando com erro

funcao2(); // em modulo2.js

console.log('Aplicação executada com sucesso.');
