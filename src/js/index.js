import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const elements = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  info: document.querySelector('.cat-info'),
};

elements.select.addEventListener('change', selectOption);

loadSelectData();

async function loadSelectData() {
  try {
    await fetchBreeds().then(data => {
      const markup = markupOptions(data);
      elements.select.innerHTML = markup;
    });
    showElement(elements.select, true);
  } catch (error) {
    showElement(elements.error, true);
    console.log(error);
  } finally {
    showElement(elements.loader, false);
  }
}

async function selectOption() {
  try {
    showElement(elements.error, false);
    showElement(elements.info, false);
    showElement(elements.loader, true);
    const itemId = elements.select.value;
    const data = await fetchCatByBreed(itemId);
    markupDescription(data);
    showElement(elements.info, true);
  } catch (error) {
    showElement(elements.error, true);
    console.log(error);
  } finally {
    showElement(elements.loader, false);
  }
}

function markupOptions(data) {
  return data.map(({ id, name }) => `<option value="${id}">${name}</option>`);
}

function markupDescription(data) {
  const image = data[0].url;
  const info = data[0].breeds[0];
  const markup = `
    <img
      class="image"
      src="${image}" 
      alt="${info.name}" 
      width="500" 
      height="500">
    <div class="description">
      <h1 class="title">${info.name}</h1>
      <p class="text">${info.description}</p>
      <div class="features">
        <h3 class="title">Temperament: </h3>
        <span class="text">${info.temperament}</span>
    </div>
    </div>  
  `;

  elements.info.innerHTML = markup;
  showElement(elements.info, true);
}

function showElement(element, visibility) {
  element.classList.toggle('visuallyhidden', !visibility);
}
