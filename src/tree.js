const format = require('./format.js');
const describe = require('./describe.js');
const template = require('./template.js');

const tree = module.exports = {
  propStructure: [],
  defStructure: [],
  doc: [],

  init: () => {
    tree.propStructure = [];
    tree.defStructure = [];
    tree.doc = [];
  },

  foreword: (schema, fileName) => {
    tree.doc.push(
        template.substitute(
            'Title',
            {'Title': schema.title}
        )
    );
    tree.doc.push(
        template.substitute(
            'Description',
            {'Description': format.toCaptal(schema.description)}
        )
    );
    tree.doc.push('');
    tree.doc.push(
        template.substitute(
            'ParsedFrom',
          schema.$id ?
              {'FileName': `[${fileName}]`, 'Link': `(${schema.$id})`}
            : {'FileName': fileName, 'Link': ''}
        )
    );
  },

  visit: (source, destination, requiredArray, old) => {
    if (source) {
      Object.keys(source).forEach((element) => {
        const value = source[element];
        const branch =
          value.properties ? value.properties
          : value.destination ? value.destination
          : (value.items && !value.items.type && !value.items.$ref) ?
            value.items : undefined;
        const name = isNaN(element) ? element : `${old}[${element}]`;
        destination.push({
          name: name,
          node: value,
          parent: old,
          hard: branch ? true : false,
          required: requiredArray ? requiredArray.indexOf(element) > -1 : false,
        });
        if (branch) {
          tree.visit(branch, destination,
              source[element].required, name);
        }
      });
    }
  },

  document: (array) => {
    array.forEach((element) => {
      if (!element.parent) tree.applyTable(element);
    });
  },

  documentHard: (array) => {
    array.forEach((element) => {
      if (element.hard) {
        tree.doc.push(
            template.substitute(
                'SubTitle',
                {'SubTitle': element.name}
            )
        );
        if (element.node.description) {
          tree.doc.push(
              template.substitute(
                  'SubDescription',
                  {'SubDescription': format.toCaptal(element.node.description)}
              )
          );
        }
        tree.initiateTable();
        if (element.node.properties) {
          Object.keys(element.node.properties).forEach((target) => {
            tree.applyTable(tree.callElementByName(array, target));
          });
        }
        if (element.node.items) {
          for (let i = 0; i < element.node.items.length; i++) {
            tree.applyTable(
                tree.callElementByName(array, `${element.name}[${i}]`)
            );
          }
        }
      }
    });
  },

  callElementByName: (array, name) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name == name) return array[i];
    }
  },

  applyTable: (element) => {
    const row = describe.property(
        element.name,
        element.node,
        element.required,
        tree.defStructure
    );
    tree.doc.push(row);
  },

  initiateTable: () => {
    tree.doc.push('');
    tree.doc.push(template.fetch('TableHeader'));
    tree.doc.push(template.fetch('TableColumns'));
  },

  tableOfContents: (array, prompt) => {
    for (let i = 0; i < array.length; i++) {
      const reference =
      array[i].hard ? array[i].name
    : array[i].parent ? array[i].parent
    : prompt;
      const tab = tree.countTab(array, array[i].parent);
      tree.doc.push(`${tab}* [${array[i].name}](#${reference})`);
    }
  },

  countTab: (array, parent, tab) => {
    if (!tab) tab = '\t';
    if (parent) {
      tab += tree.countTab(
          array,
          tree.callElementByName(array, parent).parent,
          tab
      );
    }
    return tab;
  },
};
