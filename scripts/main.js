let poop = document.querySelector("img");
let count = document.querySelector(".count");
let i = 0;

function changeImage(src) {
    poop.src = "./images/" + src + ".png";
}

document.body.onmousedown = function () {
    changeImage("throw_poo-poo");
    count.textContent = ++i;
}
document.body.onmouseup = function () {
    changeImage("eat_banana");
}


