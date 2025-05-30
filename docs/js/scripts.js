// simple floating hearts generator
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

document.getElementById('preview-btn').addEventListener('click', function() {
  // Get form values
  const occasion = document.getElementById('eventType').value;
  const message = document.getElementById('textInput').value;
  const font = document.getElementById('fontSelect').value;
  const color = document.getElementById('colorPicker').value;

  // Compose card HTML
  const previewHTML = `
    <h2 id="occasion-text" class="typing-text" style="color: ${color}; font-family: '${font}', cursive;">${occasion}</h2>
    <p id="message-text" class="typing-text" style="color: ${color}; font-family: '${font}', cursive;">${message}</p>
  `;

  // Insert into popup content container and show popup
  const popupContent = document.querySelector('.preview-popup-content');
  popupContent.innerHTML = previewHTML;

  // Show popup
  const popup = document.getElementById('preview-container');
  popup.style.display = 'flex';

  // Typing animation for occasion and message
  typeText('occasion-text');
  setTimeout(() => {
    typeText('message-text');
  }, 1000);
});

// Close preview function
function closePreview() {
  document.getElementById('preview-container').style.display = 'none';
  // Clear typed text so next time it restarts fresh
  document.querySelector('.preview-popup-content').innerHTML = '';
}

// Typing effect function
function typeText(id) {
  const element = document.getElementById(id);
  const text = element.textContent;
  let i = 0;
  element.textContent = '';

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 40);
    }
  }
  typing();
}
