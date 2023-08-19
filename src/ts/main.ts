import {fetchAPI} from './api.js';
import {createCard} from './card.js';
import {utilityFunction} from './utility.js';

const recipesContainer = document.querySelector(
  '#recipes_-container',
) as HTMLDivElement;

async function submit(value: string) {
  const stringWithoutSpaces = value.replace(/\s+/g, '');
  if (stringWithoutSpaces != '') {
    try {
      const recipes = await fetchAPI(value);

      // empty the whole container
      recipesContainer.innerHTML = '';

      if (recipes !== null) {
        // Create recipe Cards
        for (const recipe of recipes) {
          recipesContainer.appendChild(createCard(recipe));
        }
      } else {
        // Create 'Not Found' Para
        recipesContainer.appendChild(
          utilityFunction.createElementWithPropertiesAndAttributes('p', {
            textContent: 'Not Found',
            className: 'p--notFound',
          }),
        );
      }
    } catch (error) {
      console.log(`${error}`);
      throw error;
    }
  }
}

// * Implement Search using Enter
const search = document.querySelector('#search') as HTMLInputElement;
function handleSerachKeyPress(event: KeyboardEvent) {
  if (event.key == 'Enter') {
    submit(search.value);
  }
}
search.addEventListener('keypress', handleSerachKeyPress);

// * Implement Search using button click
const buttonSubmit = document.querySelector(
  '#buttonSubmit',
) as HTMLButtonElement;
function handleButtonClick() {
  submit(search.value);
}
buttonSubmit.addEventListener('click', handleButtonClick);
