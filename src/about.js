import aboutBackground from './images/about.jpg';


const aboutPageDiv = document.createElement('div');
aboutPageDiv.classList.add('aboutDiv');

//title
const aboutTitle = document.createElement("h2");
aboutTitle.classList.add("Title");
aboutTitle.innerText = 'The about page';

// image
const aboutAddImg = document.createElement("img")
aboutAddImg.classList.add("backgroundImage")
aboutAddImg.src = aboutBackground;

//about
const aboutPage = document.createElement('div');
aboutPage.innerHTML = `
<div class="about"><p>This about page is really something</p><br>
<p class="hours">Monday: whenever
<br>Tuesday: whenever
<br>Wednesday: whenever
<br>Thursday: whenever
<br>Friday: whenever
<br>Saturday: whenever
<br>Sunday: whenever</div>`;

export {aboutPageDiv, aboutTitle, aboutAddImg, aboutPage}