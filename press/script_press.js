document.addEventListener('DOMContentLoaded', function() {
    const pressReleases = document.querySelectorAll('.press-release');

    const observerOptions = {
        threshold: 0.2, // Element should be at least 20% in the viewport to trigger
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Remove observer once element is in view
            }
        });
    }, observerOptions);

    pressReleases.forEach(pressRelease => {
        observer.observe(pressRelease);
    });





    // Function to check if the user is near the bottom of the page
    function checkScrollNearBottom() {
        const copyright = document.getElementById("copyright");
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const offset = 100; // Adjust this value to determine how close to the bottom the user must be

        if (documentHeight - scrollPosition <= offset) {
            // User is near the bottom
            copyright.classList.remove("hidden");
        } else {
            // User is not near the bottom
            copyright.classList.add("hidden");
        }
    }
    // Listen for scroll events and call the checkScrollNearBottom function
    window.addEventListener("scroll", checkScrollNearBottom);
});
