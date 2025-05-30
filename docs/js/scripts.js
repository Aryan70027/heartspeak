// simple floating hearts generator
const container = document.querySelector('.heart-animation');
function spawnHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top  = Math.random() * 100 + 'vh';
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
    <div style="font-family: '${font}', cursive; color: ${color};">
      <h2>${occasion}</h2>
      <p>${message}</p>
    </div>
  `;

  // Insert into preview container and show
  document.getElementById('card-preview').innerHTML = previewHTML;
  document.getElementById('preview-container').style.display = 'block';
});

// Close preview function
function closePreview() {
  document.getElementById('preview-container').style.display = 'none';
}
