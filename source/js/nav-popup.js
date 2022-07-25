const CLASS_CONTAINER_NAME = 'popup-search__wrapper';

const searchLink = document.querySelector('.popup-search__link');
const searchContainer = document.querySelector('.popup-search__wrapper');

const onSearchLinkClick = (evt) => {
  evt.preventDefault();
  if (searchContainer.classList.contains(`${CLASS_CONTAINER_NAME}--closed`)) {
    searchContainer.classList.remove(`${CLASS_CONTAINER_NAME}--closed`);
    searchContainer.classList.add(`${CLASS_CONTAINER_NAME}--opened`);
    return;
  }
  searchContainer.classList.add(`${CLASS_CONTAINER_NAME}--closed`);
  searchContainer.classList.remove(`${CLASS_CONTAINER_NAME}--opened`);
};

searchLink.addEventListener('click', onSearchLinkClick);
