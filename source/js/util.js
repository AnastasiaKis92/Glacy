const isEscapeKey = (evt) => evt.key === 'Escape';

const openContainer = (container, overlay) => {
  container.classList.add('active');
  overlay.classList.add('active');
};

const closeContainer = (container, overlay) => {
  container.classList.remove('active');
  overlay.classList.remove('active');
};

export {isEscapeKey, openContainer, closeContainer};
