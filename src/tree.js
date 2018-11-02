const format = require('./format.js');
const describe = require('./describe.js');
const template = require('./template.js');

const tree = module.exports = {
  propStructure: [],
  defStructure: [],
  doc: [],

  init: () => {
    tree.defStructure = [];
    tree.propStructure = [];
    tree.doc = [];
  },
  visitDef: (schema) => {
    if (schema.definitions) {
      Object.keys(schema.definitions).forEach((definition) => {
        const value = schema.definitions[definition];
        tree.defStructure.push({
          name: definition,
          node: value,
          hard: (value.properties || value.$ref) ? true : false});
      });
    }
  },
  visitProp: (name, node) => {
    if (!node) return;
    if (node.properties) {
      tree.propStructure.push( {name: name, node: node} );
      Object.keys(node.properties).forEach((prop) =>
        tree.visitProp(prop, node.properties[prop]));
    }
    if (node.items && !node.items.type && !node.items.$ref) {
      tree.propStructure.push( {name: name, node: node} );
      for (let i = 0; i < node.items.length; i++) {
        tree.visitProp(template.fetch('Item') + (i+1), node.items[i]);
      }
    }
  },
  initiateTable: () => {
    tree.doc.push('');
    tree.doc.push(template.fetch('TableHeader'));
    tree.doc.push(template.fetch('TableColumns'));
  },
  documentDef: () => {
    tree.initiateTable();
    tree.defStructure.forEach((def) => {
      const row = describe.property(def.name, def.node, false);
      tree.doc.push(row);
    });
    tree.defStructure.forEach((def) => {
      if (def.hard === true) tree.document(def.name, def.node);
    });
  },
  document: (name, node) => {
    if (name) {
      tree.doc.push(template.substitute('SubTitle', {'SubTitle': name}));
      if (node.description) {
        tree.doc.push( template.substitute('SubDescription',
            {'SubDescription': format.capitalize(node.description)}) );
      }
    }
    tree.initiateTable();
    if (node.properties) {
      Object.keys(node.properties).forEach((prop) => {
        const value = node.properties[prop];
        const required = node.required ?
          node.required.indexOf(prop) > -1 : false;
        const row = describe.property(prop, value, required, tree.defStructure);
        tree.doc.push(row);
      });
    }
    if (node.items) {
      for (let i = 0; i < node.items.length; i++) {
        const name = template.fetch('Item') + (i+1);
        const value = node.items[i];
        const row = describe.property(name, value, false, tree.defStructure);
        tree.doc.push(row);
      }
    }
  },
};
