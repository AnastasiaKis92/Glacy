const isEscapeKey = (evt) => evt.key === 'Escape';

const closeContainer = (container, overlay) => {
  container.classList.remove('active');
  overlay.classList.remove('active');
};

export {isEscapeKey, closeContainer};
