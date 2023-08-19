var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchAPI } from './api.js';
import { createCard } from './card.js';
import { utilityFunction } from './utility.js';
const recipesContainer = document.querySelector('#recipes_-container');
function submit(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const stringWithoutSpaces = value.replace(/\s+/g, '');
        if (stringWithoutSpaces != '') {
            try {
                const recipes = yield fetchAPI(value);
                // empty the whole container
                recipesContainer.innerHTML = '';
                if (recipes !== null) {
                    // Create recipe Cards
                    for (const recipe of recipes) {
                        recipesContainer.appendChild(createCard(recipe));
                    }
                }
                else {
                    // Create 'Not Found' Para
                    recipesContainer.appendChild(utilityFunction.createElementWithPropertiesAndAttributes('p', {
                        textContent: 'Not Found',
                        className: 'p--notFound',
                    }));
                }
            }
            catch (error) {
                console.log(`${error}`);
                throw error;
            }
        }
    });
}
// * Implement Search using Enter
const search = document.querySelector('#search');
function handleSerachKeyPress(event) {
    if (event.key == 'Enter') {
        submit(search.value);
    }
}
search.addEventListener('keypress', handleSerachKeyPress);
// * Implement Search using button click
const buttonSubmit = document.querySelector('#buttonSubmit');
function handleButtonClick() {
    submit(search.value);
}
buttonSubmit.addEventListener('click', handleButtonClick);
