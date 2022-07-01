const burgerBtn = document.getElementById('burger');
const navList = document.getElementById('navList');


//Burger open/close
function toggleBtn() {
    navList.classList.toggle('show')
}

burgerBtn.addEventListener('click', toggleBtn)