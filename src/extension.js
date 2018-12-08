const format = require('./format.js');
const fs = require('fs');

const ex = module.exports = {

  parentspace: {},
  inner: {},
  defStructure: [],
  location: '',

  extend: (key, value, supRequired, supParent, tree) => {
    ex.parentspace = {};
    ex.inner = {};
    ex.location = tree.location;
    ex.defStructure = tree.defStructure;

    ex.inner.description = value.description;
    value.allOf.forEach((part) => {
      if (!ex.inner.required) ex.inner.required = [];
      ex.inner.required = ex.inner.required.concat(part.required);
      ex.formInnerObject(part, key);
    });
    const newSource = {};
    newSource[`${key}`] = ex.inner;
    return tree.visit(newSource, supRequired, supParent, ex.parentspace)[0];
  },

  formInnerObject: (node, key, trueParent) => {
    if (!node) return;
    if (!ex.inner.type) ex.inner.type = node.type;
    if (!ex.inner.format) ex.inner.format = node.format;
    if (node.properties) {
      if (!ex.inner.properties) ex.inner.properties = {};
      Object.keys(node.properties).forEach((prop) => {
        ex.inner.properties[`${prop}`] = node.properties[prop];
        ex.parentspace[`${prop}`] = trueParent ? trueParent : `#${key}`;
      });
    }
    if (node.items) {
      if (!ex.inner.items) ex.inner.items = [];
      ex.inner.items = ex.inner.items.concat(node.items);
    }
    if (node.$ref) {
      let defNode;
      const refName = format.getRefName(node.$ref);
      let newAddress = node.$ref.split('#')[0];
      if (newAddress) {
        newAddress = newAddress.replace('.', ex.location);
        const refSchema = JSON.parse(fs.readFileSync(newAddress));
        if (refSchema.definitions) {
          const array = Object.keys(refSchema.definitions);
          for (let i = 0; i < array.length; i++) {
            if (array[i] === refName) {
              defNode = refSchema.definitions[refName];
              break;
            }
          }
        }
      } else {
        for (let i = 0; i < ex.defStructure.length; i++) {
          if (ex.defStructure[i].name === refName) {
            defNode = ex.defStructure[i].value;
            break;
          }
        }
      }
      ex.formInnerObject(defNode, refName, node.$ref);
    }
  },

};
