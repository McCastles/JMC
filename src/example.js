const template = require('./template.js');

const example = module.exports = {
  finalExample: {},
  createExample: (schema) => {
    example.finalExample = {};
    example.apply(schema, example.finalExample);
    return example.finalExample;
  },
  apply: (root, place) => {
    if (!(typeof place === 'object')) return;
      root.properties ? example.applyProperties(root.properties, place)
    : root.items ? example.applyItems(root.items, place)
    : example.content(root, place);
  },
  content: (root, place, property, type) => {
    const prompt =
        root.enum ? example.applyEnum(root)
      : root.$ref ? example.applyRef()
      : template.fetchTypePrompt(type);
    if (property) place[property] = prompt;
    else place.push(prompt);
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
  applyRef: (root, place) => {

  },

/*
  content: (root, place, property) => {
    place[property] =
        root.enum ? example.applyEnum(root)
      : root.$ref ? example.applyRef()
      : template.fetchTypePrompt(root.type);
    example.apply(root, place[property]);
  },
  contentArray: (root, place, type) => {
    const prompt =
        root.enum ? example.applyEnum(root)
      : root.$ref ? example.applyRef()
      : template.fetchTypePrompt(type);
    place.push(prompt);
    example.apply(root, prompt);
  },
*/
  // applyReference: (value, tabKey, tab, comma) => {
  //   const def = format.getDefName(value.$ref);
  //   example.apply(definitions[def], tabKey, tab, comma);
  // },
};
