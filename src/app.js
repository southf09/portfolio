//Selectors for burger menu and nav list 

const burgerBtn = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

//Selectors for sections and About Me button, need to be consolidated into a querySelectorAll
const aboutBtn = document.querySelector('.btn');
const skillSection = document.querySelector('.skills-section');
const homeSection = document.querySelector('.home-section');
const projectSection = document.querySelector('.project-section');
const aboutSection = document.querySelector('.about-section');
const footerSection = document.querySelector('.footer-section');

const aboutLogo = document.querySelector('#about-logo');

//Burger open/close
function toggleBtn() {
    navList.classList.toggle('show');
}

burgerBtn.addEventListener('click', toggleBtn)

function hideSections() {
    skillSection.classList.toggle('hide');
    homeSection.classList.toggle('hide');
    projectSection.classList.toggle('hide');
    aboutSection.classList.toggle('hide');
    footerSection.classList.toggle('hide');
}

aboutBtn.addEventListener('click', hideSections);
aboutLogo.addEventListener('click', hideSections);

const skillCards = document.querySelectorAll('.skill-card');



function blurCard() {
    skillCards.classList.add('blur');
}
skillCards.addEventListener('mouseover', blurCard);
