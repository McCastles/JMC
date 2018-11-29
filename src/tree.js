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


  visit: (source, required, extension) => {
    if (!source) return;
    const array = [];
    Object.keys(source).forEach((key) => {
      const value = source[key];
      let branch = value.properties;

      if (value.items && !value.items.$ref) {
        if (value.items.properties || value.items.items) {
          branch = {};
          branch[format.giveName(key, 0)] = value.items;
        }

        if (!branch && !value.items.type) {
          branch = describe.fill(value.items, key);
        }
      }
      array.push({
        name: key,
        value: value,
        // mb opredelić tut type?
        required: required && required.indexOf(key) > -1 ? '+' : '-',
        parent: extension,
        format: value.format ? value.format : '*',
        children: tree.visit(branch, value.required, key),
      });
    });
    return array;
  },

  initiateTable: (isRoot, name, description) => {
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
    tree.doc.push('');
    const header = isRoot ? 'RootHeader' : 'ChildHeader';
    const columns = isRoot ? 'RootColumns' : 'ChildColumns';
    tree.doc.push(template.fetch(header));
    tree.doc.push(template.fetch(columns));
  },

  document: (array) => {
    array.forEach((element) => {
      tree.doc.push(describe.property(element, tree.defStructure));
    });
    array.forEach((element) => {
      if (!element.children) return;
      tree.initiateTable(false, element.name, element.value.description);
      tree.document(element.children);
    });
  },

  print: (array, tab) => {
    array.forEach((element) => {
      if (element.children) {
        tree.doc.push(`${tab}* [${element.name}](#${element.name})`);
        tree.print(element.children, tab + tab);
      }
    });
  },
};
