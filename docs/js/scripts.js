// Floating hearts animation (optional, keep if you use it)
const container = document.querySelector('.heart-animation');
function spawnHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(spawnHeart, 300);

// Preview button click handler
document.getElementById('preview-btn').addEventListener('click', function () {
  const occasion = document.getElementById('eventType').value;
  const message = document.getElementById('textInput').value;
  const font = document.getElementById('fontSelect').value;
  const color = document.getElementById('colorPicker').value;

  // Compose preview HTML placeholders
  const previewHTML = `
    <h2 id="popup-occasion" style="font-family: '${font}', cursive; color: ${color};"></h2>
    <p id="popup-message" style="font-family: '${font}', cursive; color: ${color}; font-size: 1.2rem;"></p>
  `;

  // Show popup container and insert HTML
  const popup = document.getElementById('preview-popup');
  popup.style.display = 'flex';
  const previewContainer = document.getElementById('popup-card-preview');
  previewContainer.innerHTML = previewHTML;

  // Typing animation function
  function typeText(elementId, text, delay = 50) {
    let i = 0;
    const el = document.getElementById(elementId);
    el.textContent = '';
    function typing() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typing, delay);
      }
    }
    typing();
  }

  // Start typing occasion then message with delay
  typeText('popup-occasion', occasion);
  setTimeout(() => typeText('popup-message', message), occasion.length * 60);
});

// Close popup button handler
document.getElementById('close-popup').addEventListener('click', function () {
  document.getElementById('preview-popup').style.display = 'none';
});
