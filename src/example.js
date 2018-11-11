const template = require('./template.js');

const example = module.exports = {
  finalExample: {},
  defStructure: [],
  createExample: (schema, defStructure) => {
    example.finalExample = {};
    example.defStructure = defStructure;
    example.apply(schema, example.finalExample);
    return example.finalExample;
  },
  apply: (root, place) => {
    if (!(typeof place === 'object')) return;
      root.properties ? example.applyProperties(root.properties, place)
    : root.items ? example.applyItems(root.items, place)
    : root.$ref ? example.applyRef(root.$ref, place)
    : example.content(root, place);
  },
  content: (root, place, property, type) => {
    const prompt =
        root.enum ? example.applyEnum(root)
      : root.$ref ? template.fetchRefPrompt(
          root.$ref.getRefName(), example.defStructure)
      : template.fetchTypePrompt(type);
    if (property) place[property] = prompt;
    else if (type) place.push(prompt);
    example.apply(root, prompt);
  },
  applyProperties: (properties, place) => {
    Object.keys(properties).forEach((property) => {
      example.content(properties[property], place,
          property, properties[property].type);
    });
  },
  applyItems: (items, place) => {
    if (items.type) example.content(items, place, undefined, items.type);
    else {
      items.forEach((item) =>
        example.content(item, place, undefined, item.type));
    }
  },
  applyEnum: (root) => {
    return root.default ? root.default : root.enum[0];
  },
  applyRef: (reference, place) => {
    const name = reference.getRefName();
    for (let i = 0; i < example.defStructure.length; i++) {
      if (example.defStructure[i].name === name) {
        example.apply(example.defStructure[i].node, place);
        break;
      }
    }
  },
};
