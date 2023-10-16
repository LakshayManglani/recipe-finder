import {utilityFunction} from '../../ts/utility';

describe('createElementWithPropertiesAndAttributes', () => {
  test('element, nothing', () => {
    const checkFor = 'div';
    const checkTo = document.createElement('div');

    expect(
      utilityFunction.createElementWithPropertiesAndAttributes(checkFor),
    ).toEqual(checkTo);
  });

  test('element, attribute and properties', () => {
    const checkFor = 'p';
    const checkTo = document.createElement('p');
    checkTo.setAttribute('class', 'paragraph');
    checkTo.innerText = 'I am a paragraph';

    expect(
      utilityFunction.createElementWithPropertiesAndAttributes(checkFor, {
        className: 'paragraph',
        innerText: 'I am a paragraph',
      }),
    ).toEqual(checkTo);
  });
});
