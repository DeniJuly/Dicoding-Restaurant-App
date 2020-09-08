import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

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
    navbarElement.classList.remove('open')
    event.stopPropagation()
})

HeroElement.addEventListener('click', event => {
    navbarElement.classList.remove('open')
    event.stopPropagation()
})

FooterElement.addEventListener('click', event => {
    navbarElement.classList.remove('open')
    event.stopPropagation()
})


 
let restaurantElement = '';
data.restaurants.forEach(resto => {
    restaurantElement += `
                <article class="post__item">
                    <div class="post__header">
                        <div class="post__kota">
                            <p>${resto.city}</p>
                        </div>
                        <div class="post__thumbnail">
                            <img src="${resto.pictureId}" alt="${resto.name}">
                        </div>
                    </div>
                    <div class="post__body">
                        <div class="rating">
                            <img src="./images/icon/star.svg" alt="rating">
                            <p>${resto.rating}</p>
                        </div>
                        <a href="#" class="post__title">${resto.name}</a>
                        <p class="post__description">${resto.description.substr(0,160)}</p>
                    </div>
                </article>
    `            
});
document.querySelector("#post__article").innerHTML = restaurantElement;