document.addEventListener("DOMContentLoaded", function () {
  
  initializeSlideshow();

  const navLinks = document.querySelectorAll("nav a, .footer a");

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const page = this.getAttribute("data-page");

          fetch(page)
              .then(response => {
                  if (!response.ok) {
                      throw new Error("Network response was not ok " + response.statusText);
                  }
                  return response.text();
              })
              .then(html => {
                  document.getElementById("content").innerHTML = html;
                  
                  initializeSlideshow();
              })
              .catch(error => {
                  console.error("Error loading page:", error);
                  document.getElementById("content").innerHTML = "<p>Error loading page. Please try again.</p>";
              });
      });
  });
});


function initializeSlideshow() {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  const showNextSlide = () => {
      slides[currentIndex].classList.remove("active");

      currentIndex = (currentIndex + 1) % slides.length;

      slides[currentIndex].classList.add("active");
  };

  
  if (slides.length > 0) {
      slides[currentIndex].classList.add("active");
  }

  
  setInterval(showNextSlide, 4000);
}


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-list li a');
  
  
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });
  
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('open');
      });
    });
  });
