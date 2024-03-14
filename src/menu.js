import menuBackground from './images/menu.jpg';

const menuPageDiv = document.createElement('div');
menuPageDiv.classList.add('menuDiv');

//title
const menuTitle = document.createElement("h2");
menuTitle.classList.add("Title");
menuTitle.innerText = 'Menu';

// image
const menuAddImg = document.createElement("img")
menuAddImg.classList.add("backgroundImage")
menuAddImg.src = menuBackground;

//about
const menuPage = document.createElement('div');
menuPage.innerHTML = `
<div class="about"><p>The menu</p><br>
<p class="hours">Monday: whenever
<br>Tuesday: whenever
<br>Wednesday: whenever
<br>Thursday: whenever
<br>Friday: whenever
<br>Saturday: whenever
<br>Sunday: whenever</div>`;

export {menuAddImg, menuPageDiv, menuTitle, menuPage}