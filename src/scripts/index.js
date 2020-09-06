import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

console.log('Hello Coders! :)');


const menuButton = document.querySelector('#menu')
const navbarElement = document.querySelector('.navbar')
const mainElement = document.querySelector('main')
const HeroElement = document.querySelector('.hero')
const FooterElement = document.querySelector('footer')

menuButton.addEventListener('click', event => {
    navbarElement.classList.toggle('open')
    event.stopPropagation()
})

mainElement.addEventListener('click', event => {
    navbarElement.classList.toggle('open')
    event.stopPropagation()
})

HeroElement.addEventListener('click', event => {
    navbarElement.classList.toggle('open')
    event.stopPropagation()
})

FooterElement.addEventListener('click', event => {
    navbarElement.classList.toggle('open')
    event.stopPropagation()
})