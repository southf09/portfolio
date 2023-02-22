const burgerBtn = document.getElementById('burger');
const navList = document.querySelector('.nav-list');


//Burger open/close
function toggleBtn() {
    navList.classList.toggle('show');
}

burgerBtn.addEventListener('click', toggleBtn)