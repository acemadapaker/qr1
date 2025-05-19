function showSurprise() {
  const box = document.getElementById('box');
  const surprise = document.getElementById('surprise');

  box.innerHTML = '🎁';
  box.style.animation = 'none';
  surprise.style.display = 'block';
}
