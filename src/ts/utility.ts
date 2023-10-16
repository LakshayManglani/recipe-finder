// UtilityFunctions
export const utilityFunction = {
  createElementWithPropertiesAndAttributes<
    T extends keyof HTMLElementTagNameMap,
  >(
    tagName: T,
    properties: Partial<HTMLElementTagNameMap[T]> = {},
  ): HTMLElement {
    const element = document.createElement(tagName);
    Object.assign(element, properties);
    return element;
  },

  appendChildren(parent: HTMLElement, children: HTMLElement[]) {
    children.forEach(child => parent.appendChild(child));
    return parent;
  },
};
