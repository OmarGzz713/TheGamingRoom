document.getElementById('theme-controller').addEventListener('click', function(){
    document.body.classList.toggle('red-theme');
});

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

const dropDown = document.querySelector(".dropdown-content");
function show() {
    dropDown.style.display = "flex";
}

function hide() {
    dropDown.style.display = "none";
}

function projectDisplay() {
    if (dropDown.style.display === "none") {
        show()
    } else {
        hide()
    }
}
