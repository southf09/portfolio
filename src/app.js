//Selectors for burger menu and nav list 
const burgerBtn = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

//Opens and closes the burger menu, when in mobile view
function toggleBtn() {
    navList.classList.toggle('show');
}

burgerBtn.addEventListener('click', toggleBtn)

//Section selectors
const aboutBtn = document.querySelector('.btn');
const skillSection = document.querySelector('.skills-section');
const homeSection = document.querySelector('.home-section');
const projectSection = document.querySelector('.project-section');
const aboutSection = document.querySelector('.about-section');
const footerSection = document.querySelectorAll('.footer-section');
// const formSection = document.querySelector('.form-section');

//Selectors to navigate back to the home page
const aboutLogo = document.querySelector('#about-logo');
const homeLink = document.querySelector('#home');


//Toggles the 'hide' class on the sections
function hideSections() {
    skillSection.classList.toggle('hide');
    homeSection.classList.toggle('hide');
    projectSection.classList.toggle('hide');
    aboutSection.classList.toggle('hide');
    // footerSection.classList.toggle('hide');
}

aboutBtn.addEventListener('click', hideSections);
aboutLogo.addEventListener('click', hideSections);
homeLink.addEventListener('click', hideSections);

// const contactBtn = document.querySelector('.contact-btn');

// contactBtn.addEventListener('click', openForm);


