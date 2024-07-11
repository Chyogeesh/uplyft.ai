// You can add JavaScript for interactive elements, animations, or fetching data asynchronously as needed.
// Example: Smooth scrolling to sections on click

document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
