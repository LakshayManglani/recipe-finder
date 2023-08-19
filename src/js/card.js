import { utilityFunction } from './utility.js';
// * Recipe Card Creator Function
export function createCard(recipe) {
    const recipeContainer = utilityFunction.createElementWithPropertiesAndAttributes('section', {
        className: 'recipe_-container',
    });
    const recipeImageContainer = utilityFunction.createElementWithPropertiesAndAttributes('div', {
        className: 'recipe_-image_-container',
    });
    const recipeImage = utilityFunction.createElementWithPropertiesAndAttributes('img', {
        className: 'recipe_-image',
        src: recipe.image,
        alt: recipe.name,
    });
    utilityFunction.appendChildren(recipeImageContainer, [recipeImage]);
    const recipeTimeContainer = utilityFunction.createElementWithPropertiesAndAttributes('div', {
        className: 'recipe_-time_-container',
    });
    const recipeTime = utilityFunction.createElementWithPropertiesAndAttributes('div', {
        className: 'recipe_-time',
    });
    recipeTime.textContent = `${recipe.prepareTime + recipe.cookTime} minutes`;
    utilityFunction.appendChildren(recipeTimeContainer, [recipeTime]);
    const recipeContent = utilityFunction.createElementWithPropertiesAndAttributes('div', {
        className: 'recipe_-content',
    });
    const recipeName = utilityFunction.createElementWithPropertiesAndAttributes('p', {
        className: 'recipe_-name',
    });
    recipeName.textContent = recipe.name;
    const recipeDescription = utilityFunction.createElementWithPropertiesAndAttributes('p', {
        className: 'recipe_-description',
    });
    recipeDescription.textContent = recipe.description;
    utilityFunction.appendChildren(recipeContent, [
        recipeName,
        recipeDescription,
    ]);
    utilityFunction.appendChildren(recipeContainer, [
        recipeImageContainer,
        recipeTimeContainer,
        recipeContent,
    ]);
    return recipeContainer;
}
