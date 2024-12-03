// Add an event listener to detect when the user scrolls the page
document.addEventListener('scroll', () => {
    // Select the navigation bar element
    const nav = document.querySelector('nav');
    
    // Check the vertical scroll position of the window
    if (window.scrollY > 0) {
        // If the user has scrolled down, add the "navbar-scrolled" class to the navigation bar
        nav.classList.add("navbar-scrolled");
    } else {
        // If the user is at the top of the page, remove the "navbar-scrolled" class
        nav.classList.remove("navbar-scrolled");
    }
});
