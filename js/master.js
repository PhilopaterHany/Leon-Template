// Navigation Menu Toggle
const links = document.getElementById("links");
const menu = document.getElementById("menu");
links.onclick = () => {
    menu.classList.toggle("show");
};

// Scroll To Top Button
const btn = document.getElementById("to-top");
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

// Putting Year at Footer
document.querySelector("footer .year").innerHTML = new Date().getFullYear();