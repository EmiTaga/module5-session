// Function to redirect to the Menu page
function redirectToMenu() {
    window.location.href = "menu.html";
}

// Function to redirect to a random category page
function redirectToRandomCategory() {
    // Array of random category short_names
    var categories = ["Lunch", "Dinner", "Sushi", "Breakfast"]; // Add more categories as needed

    // Generate a random index to select a random category
    var randomIndex = Math.floor(Math.random() * categories.length);

    // Get the random category short_name
    var randomCategoryShortName = categories[randomIndex];

    // Redirect to the category page
    window.location.href = "menu.html?category=" + randomCategoryShortName;
}

// Function to redirect to the Map page
function redirectToMap() {
    window.location.href = "map.html";
}
