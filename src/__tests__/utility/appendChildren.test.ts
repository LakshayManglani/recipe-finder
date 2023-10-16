import {utilityFunction} from '../../ts/utility';

describe('appendChildren', () => {
  test('only parent, no child', () => {
    const checkFor = document.createElement('div');
    const checkTo = document.createElement('div');

    // should remain same
    expect(utilityFunction.appendChildren(checkFor, [])).toEqual(checkTo);

    // Check for the innerHTML
    expect(utilityFunction.appendChildren(checkFor, []).innerHTML).toBe(
      checkTo.innerHTML,
    );
  });

  test('parent, one child', () => {
    const checkFor = document.createElement('div');
    const checkTo = document.createElement('div');
    checkTo.appendChild(document.createElement('p'));

    expect(
      utilityFunction.appendChildren(checkFor, [document.createElement('p')]),
    ).toEqual(checkTo);
  });

  test('parent, children', () => {
    const checkFor = document.createElement('div');
    const checkTo = document.createElement('div');
    checkTo.appendChild(document.createElement('p'));
    checkTo.appendChild(document.createElement('p'));

    expect(
      utilityFunction.appendChildren(checkFor, [
        document.createElement('p'),
        document.createElement('p'),
      ]),
    ).toEqual(checkTo);
  });
});
