const format = require('./format.js');
const describe = require('./describe.js');
const template = require('./template.js');

const tree = module.exports = {
  structure: [],
  doc: [],
  visited_refs: [],
  schema_definitions: [],
  hard_definitions: [],

  init: (definitions) => {
    tree.structure = [];
    tree.hard_definitions = [];
    tree.doc = [];
    tree.visited_refs = [];
    tree.schema_definitions = [];
    if (definitions) {
      definitions.forEach((definition) =>
        tree.schema_definitions.push(definition));
    }
  },

  visit: (name, node, branch) => {
    if (!node) return;

    if (node.definitions) {
      Object.keys(node.definitions).forEach((def) =>
        tree.visit(def, node.definitions[def], tree.hard_definitions));
    }

    if (node.properties) {
      branch.push( {name: name, node: node} );
      Object.keys(node.properties).forEach((prop) =>
        tree.visit(prop, node.properties[prop], branch));
    }

    if (node.items && !node.items.type && !node.items.$ref) {
      branch.push( {name: name, node: node} );
      for (let i = 0; i < node.items.length; i++) {
        tree.visit(template.fetch('Item') + (i+1), node.items[i], branch);
      }
    }

    if ( (node.$ref) && (tree.visited_refs[node.$ref] === undefined) ) {
      tree.visited_refs[node.$ref] = true;
    }
  },

  initiateTable: () => {
    tree.doc.push('');
    tree.doc.push(template.fetch('TableHeader'));
    tree.doc.push(template.fetch('TableColumns'));
  },

  documentDef: (node, tree) => {
    tree.initiateTable();
    Object.keys(node.definitions).forEach((def) => {
      const value = node.definitions[def];
      const row = describe.property(def, value, false, tree);
      tree.doc.push(row);
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
        const row = describe.property(prop, value, required, tree);
        tree.doc.push(row);
      });
    }

    if (node.items) {
      for (let i = 0; i < node.items.length; i++) {
        const name = template.fetch('Item') + (i+1);
        const value = node.items[i];
        const row = describe.property(name, value, false, tree);
        tree.doc.push(row);
      }
    }
  },
};
