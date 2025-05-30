// Floating hearts animation (keep your existing if you want)
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

// Preview button logic
document.getElementById('preview-btn').addEventListener('click', function() {
  // Get form values
  const occasion = document.getElementById('eventType').value;
  const message = document.getElementById('textInput').value;
  const font = document.getElementById('fontSelect').value;
  const color = document.getElementById('colorPicker').value;

  // Compose HTML with IDs for typing effect
  const previewHTML = `
    <h2 id="occasion-text" class="typing-text" style="color: ${color}; font-family: '${font}', cursive;">${occasion}</h2>
    <p id="message-text" class="typing-text" style="color: ${color}; font-family: '${font}', cursive;">${message}</p>
  `;

  // Insert into popup content and show popup
  const popupContent = document.querySelector('.preview-popup-content');
  popupContent.innerHTML = previewHTML;

  const popup = document.getElementById('preview-container');
  popup.style.display = 'flex';

  // Start typing animation
  typeText('occasion-text');
  setTimeout(() => {
    typeText('message-text');
  }, 1000);
});

// Close popup
function closePreview() {
  const popup = document.getElementById('preview-container');
  popup.style.display = 'none';
  document.querySelector('.preview-popup-content').innerHTML = '';
}

// Typing effect function
function typeText(id) {
  const element = document.getElementById(id);
  if (!element) return;

  const fullText = element.textContent;
  element.textContent = '';
  let i = 0;

  function type() {
    if (i < fullText.length) {
      element.textContent += fullText.charAt(i);
      i++;
      setTimeout(type, 50); // Adjust speed here
    }
  }
  type();
}
