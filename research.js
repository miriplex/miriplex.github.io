/* Progressive enhancement: both stages remain readable without JavaScript. */
(() => {
  const controls = document.querySelector('[data-result-controls]');
  if (!controls) return;
  const buttons = [...controls.querySelectorAll('button[data-stage]')];
  const panels = [...document.querySelectorAll('[data-result-stage]')];
  function selectStage(id) {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.stage === id)));
    panels.forEach(panel => { panel.hidden = panel.dataset.resultStage !== id; });
  }
  controls.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => selectStage(button.dataset.stage)));
  selectStage('pendulum');
})();
