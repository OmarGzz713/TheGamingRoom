function themeController() {

}

const menuBtn = document.querySelector('.right-bar-menu')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
const list = document.querySelector('.right-bar-items');
menuBtn.addEventListener('click', () => {
    list.classList.toggle('show');
});

const qq = document.querySelector(".dropdown-content");
function s() {
    qq.style.display = "flex";
}

function c() {
    qq.style.display = "none";
}

function showOrHide() {
    if (qq.style.display === "none") {
        s()
    } else {
        c()
    }
}