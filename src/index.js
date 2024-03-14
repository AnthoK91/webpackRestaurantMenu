import './style.css';
import restBackground from './images/background.jpg';
import {aboutPageDiv, aboutTitle, aboutAddImg, aboutPage} from './about';
import {menuAddImg, menuPageDiv, menuTitle, menuPage} from  './menu';


//button switch
const buttons = document.querySelectorAll("button");
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#about');
const aboutButton = document.querySelector('#about');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.id === 'home') {
            content.replaceChildren();
            content.appendChild(homePageDiv);
            homePageDiv.append(title, addImg, about);
        } else if (button.id === 'about') {
            content.replaceChildren();
            content.appendChild(aboutPageDiv);
            aboutPageDiv.append(aboutTitle, aboutAddImg, aboutPage);
        } else if (button.id === 'menu') {
            content.replaceChildren();
            content.appendChild(menuPageDiv);
            menuPageDiv.append(menuTitle, menuAddImg, menuPage);
        }
    })
})


const content = document.querySelector("#content")

const homePageDiv = document.createElement('div');
homePageDiv.classList.add('homeDiv');

//title
const title = document.createElement("h2");
title.classList.add("Title");
title.innerText = 'The best Restaurant';

// image
const addImg = document.createElement("img")
addImg.classList.add("backgroundImage")
addImg.src = restBackground;

//about
const about = document.createElement('div');
about.innerHTML = `
<div class="about"><p>This restaurant is really something</p><br>
<p class="hours">Monday: whenever
<br>Tuesday: whenever
<br>Wednesday: whenever
<br>Thursday: whenever
<br>Friday: whenever
<br>Saturday: whenever
<br>Sunday: whenever</div>`;


