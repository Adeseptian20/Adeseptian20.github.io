const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav_bar")
const closeBtn = document.querySelector(".close_btn")
const naviagtion =document.querySelector('.navigation')
const body =document.querySelector('body')
const darkMood = document.querySelector('.dark_mood')

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})

closeBtn.addEventListener ("click", () => {
    closeBtn.classList.toggle('active');
    navBar.classList.remove('active');
})

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    naviagtion.classList.toggle('scrolling-active', windowPosition);
    navBar.classList.remove('active')
})

darkMood.addEventListener('click', function(){
    this.classList.toggle('ri-sun-line');
    body.classList.toggle('dark_mood_active')
})

    

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 10000); 
}