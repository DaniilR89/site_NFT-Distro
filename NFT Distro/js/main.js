const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    })
});

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav__items");

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});