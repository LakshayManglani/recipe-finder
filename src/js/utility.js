// UtilityFunctions
export const utilityFunction = {
    createElementWithPropertiesAndAttributes(tagName, properties = {}) {
        const element = document.createElement(tagName);
        Object.assign(element, properties);
        return element;
    },
    appendChildren(parent, children) {
        children.forEach(child => parent.appendChild(child));
        return parent;
    },
};
