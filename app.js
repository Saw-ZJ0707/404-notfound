document.addEventListener('DOMContentLoaded', () => {
    // Custom logic can be added here.

    // Example: Handling form submission.
    const jobSearchForm = document.getElementById('jobSearchForm');
    if (jobSearchForm) {
        jobSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would fetch job data here.
            console.log('Job search form submitted!');
            // You could display a message to the user here instead of using an alert.
            // For example, update a message box in the DOM.
            const messageBox = document.createElement('div');
            messageBox.textContent = 'Searching for jobs...';
            messageBox.className = 'mt-4 p-3 bg-green-100 text-green-700 rounded-lg';
            jobSearchForm.appendChild(messageBox);
            setTimeout(() => messageBox.remove(), 3000);
        });
    }

    // Example: Adding hover effect to the header navigation links.
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            console.log(`Mouse entered link: ${link.textContent}`);
        });
        link.addEventListener('mouseleave', () => {
            console.log(`Mouse left link: ${link.textContent}`);
        });
    });

});



