
document.addEventListener("DOMContentLoaded", function () {
    
    const navLinks = document.querySelectorAll("nav a");
  
    
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
          })
          .catch(error => {
            console.error("Error loading page:", error);
            document.getElementById("content").innerHTML = "<p>Error loading page. Please try again.</p>";
          });
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    const showNextSlide = () => {
      // Remove 'active' class from the current slide
      slides[currentIndex].classList.remove("active");
  
      // Move to the next slide, looping back to the first slide
      currentIndex = (currentIndex + 1) % slides.length;
  
      // Add 'active' class to the new current slide
      slides[currentIndex].classList.add("active");
    };
  
    // Start the slideshow with the first slide
    slides[currentIndex].classList.add("active");
  
    // Change slides every 3 seconds (adjust interval as needed)
    setInterval(showNextSlide, 3000);
  });
  