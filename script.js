const hidden = document.querySelectorAll(".hidden");
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hidden.forEach((elem) => observer.observe(elem));


menuIcon.addEventListener('click', () => {
 if(navLinks.style.display == "none") 
 {
    navLinks.style.display = "block";
 }
 else 
 {
    navLinks.style.display = "none";
 }
});