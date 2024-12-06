
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
  