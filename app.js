// Department slider logic for HR Management

const wrapper = document.querySelector('.sliderWrapper');
const items = document.querySelectorAll('.sliderItem');
const menuItems = document.querySelectorAll('.menuItem');

let currentIndex = 0;

function goToSlide(index) {
    if (!wrapper) return;
    currentIndex = index;
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
}

// Menu click navigation
menuItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        goToSlide(i);
    });
});
function updateWrapperWidth() {
    if (wrapper) {
        wrapper.style.width = `${items.length * 100}vw`;
    }
}
updateWrapperWidth();
window.addEventListener('resize', updateWrapperWidth);

// Make department name in slider clickable to jump and change job title
document.addEventListener('DOMContentLoaded', function() {
    var jobTitles = document.querySelectorAll('.clickableJob');
    var jobSection = document.getElementById('jobSection');
    var jobTitle = document.getElementById('jobTitle');
    jobTitles.forEach(function(title) {
        title.style.cursor = 'pointer';
        title.addEventListener('click', function() {
            if (jobTitle && jobSection) {
                jobTitle.textContent = title.textContent;
                jobSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
