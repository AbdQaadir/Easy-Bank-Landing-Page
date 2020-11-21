const close = document.querySelector(".close");
const open = document.querySelector(".open");
const dropdownNav = document.querySelector(".mobile-dropdown");


open.onclick = () => {
    dropdownNav.style.marginTop = 0;
    open.style.display = "none";
    close.style.display = "block";
}
close.onclick = () => {
    dropdownNav.style.marginTop = "-100vh";
    open.style.display = "block";
    close.style.display = "none";
}