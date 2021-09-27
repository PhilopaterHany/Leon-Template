const links = document.getElementById("links");
const menu = document.getElementById("menu");
const btn = document.getElementById("to-top");
links.onclick = () => {
    menu.classList.toggle("show");
};
window.onscroll = () => {
    window.scrollY >= 400
        ? (btn.style.right = "15px")
        : (btn.style.right = "-1000px");
};
btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
