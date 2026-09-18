import javascriptLogo from './assets/javascript.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './style.css';
import { UsersApp } from './users/users-app';

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo"/>
  </div>
  <h1 id="app-title">Hello Vite!</h1>
  <div class="card"></div>
</section>
`;

const element = document.querySelector('.card');
UsersApp(element);