document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('triggerDownload');

  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'downloads/crimson-nexus-starter.txt';
    link.download = 'crimson-nexus-starter.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
});
