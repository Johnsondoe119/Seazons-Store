window.onload = function () {
  fetch("collections.json")
    .then((response) => response.json())
    .then((data) => {
      let productHTML = "";
      for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let product = `
        <div class="product">
            <div class="product-image">
                <img src="${item.img_src}" alt="" />
            </div>
            <div class="product-name">${item.name}</div>
            <div class="product-price"><button class="btn">${item.price}</button></div>
            <div class="product-description">${item.description}</div>
        
        </div>
        `;

        productHTML += product;
      }

      let newArrivals = document.getElementsByClassName("product-grid")[0];
      newArrivals.innerHTML = productHTML;
    });
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
};
