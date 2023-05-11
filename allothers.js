// This is the js code that adds the fade in animation
// This JavaScript code sets up an IntersectionObserver that checks for elementsare within the viewport/visable area of the screen.
const observer = new IntersectionObserver((entries) => {
  // the function logs each entry to the console, and checks whether the entry is currently intersecting with the viewport using the isIntersecting property.
  entries.forEach((entry) => {
    console.log(entry);
    // When an element comes into view, the code adds the "show" CSS class to it, and removes the class when the element goes out of view.
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
// The code selects all elements with the "hidden" class and sets up the IntersectionObserver to observe changes in their intersection with the viewport.

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// slideSHow

let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides() {
  let i;
  // get Elements is one of the older version
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}
