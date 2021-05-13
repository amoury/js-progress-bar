const input = document.getElementById('percentage');
const progressBar = document.getElementById('progress-bar');

input.addEventListener('change', ({ target }) => {
  if (!target.value) {
    progressBar.style.width = `0%`;
  }
  progressBar.style.width = `${target.value}%`;
});
