const format = require('./format.js');
const describe = require('./describe.js');
const template = require('./template.js');

const tree = module.exports = {
  propStructure: [],
  defStructure: [],
  doc: [],
  refspace: [],

  init: () => {
    tree.propStructure = [];
    tree.defStructure = [];
    tree.doc = [];
    tree.refspace = [];
  },

  fillRefspace: (source) => {
    Object.keys(source).forEach((key) => {
      if (source[key].properties) {
        tree.refspace.push(key);
        tree.fillRefspace(source[key].properties);
      }
    });
  },

  foreword: (schema, fileName) => {
    tree.doc.push(
        template.substitute(
            'Title',
            {'Title': schema.title} ) );
    tree.doc.push('');
    tree.doc.push(
        template.substitute(
            'ParsedFrom',
            schema.$id ?
              {'FileName': `[${fileName}]`, 'Link': `(${schema.$id})`}
            : {'FileName': fileName, 'Link': ''} ) );
  },

  visit: (source, required, parent) => {
    if (!source) return;
    const array = [];
    Object.keys(source).forEach((key) => {
      const value = source[key];
      let branch = value.properties;

      if (value.allOf) {
        array.push(tree.extend(key, value, required, parent));
        return;
      }

      if (value.items && !value.items.$ref) {
        if (value.items.properties || value.items.items) {
          branch = {};
          branch[format.giveName(key, 0)] = value.items;
        }
        if (!branch && !value.items.type) {
          branch = describe.fill(value.items, key);
        }
      }

      const toPush = {
        name: key,
        value: value,
        type: describe.getType(key, value, tree.refspace),
        required: required && required.indexOf(key) > -1 ? '+' : '-',
        parent: parent,
        format: value.format ? value.format : '*',
        children: tree.visit(branch, value.required, key),
      };

      array.push(toPush);
    });
    return array;
  },

  extend: (key, value, supRequired, parent) => {
    let inner = {};
    inner.description = value.description;
    value.allOf.forEach((part) => {
      if (!inner.required) inner.required = [];
      inner.required = inner.required.concat(part.required);
      inner = tree.formInnerObject(inner, part);
    });
    const newSource = {};
    newSource[`${key}`] = inner;
    return tree.visit(newSource, supRequired, parent)[0];
  },

  formInnerObject: (inner, node) => {
    if (!inner.type) inner.type = node.type;
    if (!inner.format) inner.format = node.format;
    if (node.properties) {
      if (!inner.properties) inner.properties = {};
      Object.keys(node.properties).forEach((prop) => {
        inner.properties[`${prop}`] = node.properties[prop];
      });
    }
    if (node.items) {
      if (!inner.items) inner.items = [];
      inner.items = inner.items.concat(node.items);
    }
    if (node.$ref) {
      const defNode = tree.getDefNode(node.$ref);
      inner = tree.formInnerObject(inner, defNode);
    }
    return inner;
  },

  getDefNode: (ref) => {
    const refName = format.getRefName(ref);
    for (let i = 0; i < tree.defStructure.length; i++) {
      if (tree.defStructure[i].name === refName) {
        return tree.defStructure[i].value;
      }
    }
  },

  document: (array, rowType) => {
    array.forEach((element) => {
      tree.doc.push(describe.createRow(element, rowType));
    });
    array.forEach((element) => {
      if (!element.children) return;
      tree.initiateTable('ChildHeader', 'ChildColumns',
          element.name, element.value.description);
      tree.document(element.children, 'ChildRow');
    });
  },

  initiateTable: (header, columns, name, description) => {
    if (name) {
      name = template.substitute(
          'SubTitle',
          {'SubTitle': name}
      );
      tree.doc.push(name);
    }
    if (description) {
      description = template.substitute(
          'SubDescription',
          {'SubDescription': format.toCaptal(description)}
      );
      tree.doc.push(description);
    }
    tree.doc.push(template.fetch(header));
    tree.doc.push(template.fetch(columns));
  },

  print: (array, tab) => {
    array.forEach((element) => {
      if (element.children) {
        tree.doc.push(`${tab}* [${element.name}](#${element.name})`);
        tree.print(element.children, tab + '\t');
      }
    });
  },
};
