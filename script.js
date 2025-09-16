const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const visibleImages = 3; 
const imageWidth = 210;

let currentPosition = 0;

nextBtn.addEventListener('click', () => {
  const maxPosition = -(track.children.length - visibleImages) * imageWidth;
  currentPosition = Math.max(currentPosition - imageWidth, maxPosition);
  track.style.transform = `translateX(${currentPosition}px)`;
});

prevBtn.addEventListener('click', () => {
  currentPosition = Math.min(currentPosition + imageWidth, 0);
  track.style.transform = `translateX(${currentPosition}px)`;
});
