// Dedicate button → Login
const dedicateBtn = document.getElementById('dedicateBtn');
if (dedicateBtn) {
  dedicateBtn.addEventListener('click', () => {
    window.location.href = '/pages/login.html';
  });
}

// Login buttons
const googleBtn = document.getElementById('googleBtn');
if (googleBtn) {
  googleBtn.addEventListener('click', () => {
    alert('Google login flow (stub)');
  });
}
const phoneLoginBtn = document.getElementById('phoneLoginBtn');
if (phoneLoginBtn) {
  phoneLoginBtn.addEventListener('click', () => {
    const phone = document.getElementById('phoneInput').value.trim();
    if (!phone) return alert('Please enter your phone number.');
    window.location.href = '/pages/dashboard.html';
  });
}

// Dashboard → New Creation
const newCreationBtn = document.getElementById('newCreationBtn');
if (newCreationBtn) {
  newCreationBtn.addEventListener('click', () => {
    window.location.href = '/pages/card-creator.html';
  });
}

// Card Creator: preview & draft (localStorage stub)
(function () {
  const eventType = document.getElementById('eventType');
  const textInput = document.getElementById('textInput');
  const fontSelect = document.getElementById('fontSelect');
  const colorPicker = document.getElementById('colorPicker');
  const imageUpload = document.getElementById('imageUpload');
  const musicUpload = document.getElementById('musicUpload');
  const cardText = document.getElementById('cardText');
  const previewImage = document.getElementById('previewImage');
  const previewAudio = document.getElementById('previewAudio');
  const cardPreview = document.getElementById('cardPreview');

  if (eventType && cardPreview) {
    // Live preview
    eventType.addEventListener('change', () => {
      cardPreview.className = 'preview-card ' + eventType.value.toLowerCase();
    });
    textInput.addEventListener('input', () => {
      cardText.textContent = textInput.value || 'Your heartfelt message here';
    });
    fontSelect.addEventListener('change', () => {
      cardText.style.fontFamily = fontSelect.value;
    });
    colorPicker.addEventListener('input', () => {
      cardText.style.color = colorPicker.value;
    });
    imageUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        previewImage.src = reader.result;
        previewImage.style.display = 'block';
      };
      reader.readAsDataURL(file);
    });
    musicUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      previewAudio.src = url;
      previewAudio.style.display = 'block';
    });
  }

  // Save draft & Next button
  const saveDraftBtn = document.getElementById('saveDraftBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
      alert('Draft saved (stub)');
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (saveDraftBtn) saveDraftBtn.click();
      window.location.href = '/pages/preview.html';
    });
  }
})();

// Gallery tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const event = btn.getAttribute('data-event');
    document.querySelectorAll('.gallery-grid').forEach(grid => {
      grid.style.display = grid.id === event ? 'grid' : 'none';
    });
  });
});

// Share Settings button
const generateBtn = document.getElementById('generateBtn');
if (generateBtn) {
  generateBtn.addEventListener('click', () => {
    const link = location.origin + '/pages/preview.html?share=123';
    document.getElementById('linkOutput').textContent = link;
    document.getElementById('linkOutput').style.display = 'block';
    document.getElementById('shareButtons').style.display = 'flex';
  });
}

// Analytics toggles (stub)
document.getElementById('realTimeEmail')?.addEventListener('change', e => {
  alert(`Real-time emails ${e.target.checked? 'enabled':'disabled'}`);
});
document.getElementById('dailyDigest')?.addEventListener('change', e => {
  alert(`Daily digest ${e.target.checked? 'enabled':'disabled'}`);
});

// Floating heart generation
const heartContainer = document.querySelector('.heart-animation');
if (heartContainer) {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 400);
}
