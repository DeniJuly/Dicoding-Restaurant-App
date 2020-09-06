import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

console.log('Hello Coders! :)');


const menuButton = document.querySelector('#menu');
const navbarElement = document.querySelector('.navbar')

menuButton.addEventListener('click', event => {
    navbarElement.classList.toggle('open')
    event.stopPropagation()
})