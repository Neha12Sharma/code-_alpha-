let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Add event listeners to navigation buttons
prevButton.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateGallery();
});

nextButton.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateGallery();
});

// Add event listener to images
images.forEach((image) => {
    image.addEventListener('click', () => {
        currentImageIndex = Array.prototype.indexOf.call(images, image);
        updateGallery();
    });
});

// Update gallery function
function updateGallery() {
    images.forEach((image) => {
        image.style.display = 'none';
    });
    images[currentImageIndex].style.display = 'block';
}