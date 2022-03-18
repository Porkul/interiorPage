let menu = document.getElementById("menu")
let nav = document.getElementsByTagName("ul")[0]
let span = document.getElementsByTagName("span")[0]
let target = true;
menu.onclick = function () {
    if (target) {
        nav.style.display = "block"
        span.innerText = "close"
        target = false;
    } else {
        nav.style.display = "none"
        span.innerText = "menu"
        nav.style.display = null
        target = true;
    }
}
