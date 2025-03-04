let currentIndex = 0; // Tracks the current recipe
const recipeContainer = document.querySelector(".recipe-container");
const recipes = document.querySelectorAll(".recipe-box");

function showRecipe(index) {
    // Calculate the offset for the current index
    const offset = -index * 100; // Each recipe box is 100% of the container's width
    recipeContainer.style.transform = `translateX(${offset}%)`;
}

function nextRecipe() {
    currentIndex = (currentIndex + 1) % recipes.length; // Loop back to the first recipe after the last
    showRecipe(currentIndex);
}

function prevRecipe() {
    currentIndex = (currentIndex - 1 + recipes.length) % recipes.length; // Loop back to the last recipe before the first
    showRecipe(currentIndex);
}

// Initialize the first recipe
showRecipe(currentIndex);

