const format = require('./format.js');
const describe = require('./describe.js');
const template = require('./template.js');
const extension = require('./extension.js');

const tree = module.exports = {
  propStructure: [],
  defStructure: [],
  doc: [],
  refspace: [],
  location: '',

  init: () => {
    tree.propStructure = [];
    tree.defStructure = [];
    tree.doc = [];
    tree.refspace = [];
    tree.location = '';
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

  visit: (source, required, parent, parentspace) => {
    if (!source) return;
    const array = [];
    Object.keys(source).forEach((key) => {
      const value = source[key];
      let branch = value.properties;

      let otherParent;
      if (parentspace) {
        otherParent = parentspace[`${key}`];
      }

      if (value.allOf) {
        array.push(extension.extend(key, value, required, parent, tree));
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
        required: required && required.indexOf(key) > -1 ? 'yes' : 'no',
        parent: otherParent ? otherParent : parent,
        format: value.format ? value.format : '*',
        children: tree.visit(branch, value.required, '#' + key, parentspace),
      };

      array.push(toPush);
    });
    return array;
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
      tree.doc.push('');
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
