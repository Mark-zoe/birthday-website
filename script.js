let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  
  slides.forEach(slide => slide.classList.remove('active'));
  
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    slides[0].classList.add('active'); // Show first slide immediately
    setInterval(showSlides, 5000); // Change every 5 seconds
  }
});

// Navigation function
function showSection(sectionId) {
  document.querySelectorAll('.section, .hero').forEach(section => {
    section.classList.add('hidden');
  });
  
  
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function exploreJourney() {
  showSection('journey');
}
// ==========================
// HER STORY SLIDER
// ==========================

const storyCards = document.querySelectorAll(".story-card");

let currentStory = 0;

function changeStory(){

    // Remove active class from current card
    storyCards[currentStory].classList.remove("active");

    // Move to next card
    currentStory++;

    // Start again after the last card
    if(currentStory >= storyCards.length){
        currentStory = 0;
    }

    // Show next card
    storyCards[currentStory].classList.add("active");

}

// Change every 5 seconds
setInterval(changeStory, 5000);
function goToStory() {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
}
// ==========================
// MEMORY GALLERY SLIDER
// ==========================

const gallerySlides = document.querySelectorAll(".gallery-slide");

let currentGallery = 0;

function changeGallery(){

    // Hide current slide
    gallerySlides[currentGallery].classList.remove("active");

    // Move to next slide
    currentGallery++;

    // Restart after last slide
    if(currentGallery >= gallerySlides.length){
        currentGallery = 0;
    }

    // Show next slide
    gallerySlides[currentGallery].classList.add("active");

}

// Change every 6 seconds
setInterval(changeGallery, 6000);
// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
// ==========================
// WELCOME SCREEN
// ==========================

const beginBtn = document.getElementById("begin-btn");
const welcomeScreen = document.getElementById("welcome-screen");

beginBtn.addEventListener("click", () => {

    // Small button press effect
    beginBtn.style.transform = "scale(0.96)";

    setTimeout(() => {

        welcomeScreen.classList.add("hide");

        // Allow scrolling after welcome screen disappears
        document.body.style.overflow = "auto";

    }, 300);

});

// Prevent scrolling while welcome screen is visible
document.body.style.overflow = "hidden";
// ==========================
// SCROLL PROGRESS BAR
// ==========================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});
