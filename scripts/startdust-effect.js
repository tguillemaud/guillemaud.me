// scripts/stardust-effect.js

document.addEventListener('DOMContentLoaded', () => {
    const imageCropper = document.querySelector('.image-cropper');
    const stardustContainer = document.querySelector('.stardust-container');
  
    imageCropper.addEventListener('mouseenter', createStardust);
  
    function createStardust() {
      for (let i = 0; i < 20; i++) {
        const stardust = document.createElement('div');
        stardust.classList.add('stardust');
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 80 + 20;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        stardust.style.left = '50%';
        stardust.style.top = '50%';
        stardust.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        stardustContainer.appendChild(stardust);
  
        // Remove the particle after animation
        stardust.addEventListener('animationend', () => {
          stardust.remove();
        });
      }
    }
  });
  