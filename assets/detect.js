function initFeatureStatus(el, mediaQueryString, labels, fallbackText) {
  if (!el) return;

  var mq = window.matchMedia(mediaQueryString);

  function render() {
    if (mq.media === 'not all') {
      el.textContent = fallbackText || 'This feature is not supported in your browser.';
      el.classList.remove('ok', 'warn', 'bad');
      return;
    }

    el.textContent = mq.matches ? labels.on : labels.off;
    el.classList.toggle('warn', mq.matches);
    el.classList.toggle('ok', !mq.matches);
  }

  render();
  mq.addEventListener('change', render);
}
