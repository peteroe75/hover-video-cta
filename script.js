const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  const video = panel.querySelector('.bg-video');
  const src = panel.dataset.video;

  if (video && src) {
    video.src = src;
  }

  const activate = () => {
    panels.forEach(p => {
      p.classList.remove('active');
      const v = p.querySelector('.bg-video');
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    });

    panel.classList.add('active');
    if (video) video.play().catch(() => {});
  };

  panel.addEventListener('mouseenter', activate);
  panel.addEventListener('focus', activate);
});
