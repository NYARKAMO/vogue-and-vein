// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const closeBtn = document.getElementById('close-btn');

  hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
  });

  closeBtn.addEventListener('click', function() {
    nav.classList.remove('active');
  });

  // Heart Icon Toggle
  const heartIcons = document.querySelectorAll('.heart-icon');
  heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const isLiked = this.dataset.liked === 'true';
      if (isLiked) {
        this.dataset.liked = 'false';
        this.classList.remove('liked');
        this.querySelector('i').className = 'far fa-heart';
      } else {
        this.dataset.liked = 'true';
        this.classList.add('liked');
        this.querySelector('i').className = 'fas fa-heart';
      }
    });
  });

  // Carousel
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const totalImages = images.length;

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
  }

  setInterval(showNextImage, 5000); // Change every 5 seconds
});