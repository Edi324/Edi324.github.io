document.addEventListener("DOMContentLoaded", () => {
    // Select both the title and the text containers
    const fadeElements = document.querySelectorAll(".fade-title, .fade-text-container");
  
    const handleScroll = () => {
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("visible"); // Add the visible class
        }
      });
    };
  
    // Trigger on scroll
    window.addEventListener("scroll", handleScroll);
  
    // Initial check for visibility
    handleScroll();
  });

  