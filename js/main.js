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
});