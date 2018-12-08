const fs = require('fs');
const path = require('path');
const tree = require('./tree.js');
const template = require('./template.js');
const format = require('./format.js');

/* TODO
* input
* Any additional properties
* Examples
*/

module.exports = (srcFilePath, dstFilePath, customTemplateFileName) => {
  if (!srcFilePath.endsWith('.json')) return;
  const fileName = path.basename(srcFilePath);
  const schema = JSON.parse(fs.readFileSync(srcFilePath));

  template.init(customTemplateFileName);
  tree.init();
  tree.location = srcFilePath.replace(fileName, '');
  tree.foreword(schema, fileName);

  tree.fillRefspace(schema.definitions);
  tree.defStructure = tree.visit(schema.definitions, schema.required);

  for (let i = 0; i < schema.allOf.length; i++) {
    let extension = schema.allOf[i].$ref;
    extension = extension.substr(extension.lastIndexOf('/') + 1);
    const node = schema.definitions[extension];
    if (node.properties) {
      tree.propStructure =
        tree.visit(node.properties, node.required, extension);
    }
    if (node.$ref) {
      // как-то притянуть схему по ссылке и раздеть
    }
  };

  tree.doc.push('* [Properties](#properties)');
  tree.print(tree.propStructure, '\t');

  if (schema.definitions) {
    tree.doc.push('* [Definitions](#definitions)');
    tree.print(tree.defStructure, '\t');
  }

  tree.doc.push(`## ${fileName.substr(0, fileName.indexOf('.'))}`);
  tree.doc.push(
      template.substitute(
          'Description',
          {'Description': format.toCaptal(schema.description)})
  );

  tree.doc.push(template.fetch('Properties'));
  tree.initiateTable('ChildHeader', 'ChildColumns');
  tree.document(tree.propStructure, 'ChildRow');

  if (schema.definitions) {
    tree.doc.push(template.fetch('Definitions'));
    tree.initiateTable('DefHeader', 'DefColumns');
    tree.document(tree.defStructure, 'DefRow');
  }

  dstFilePath = format.outputCheck(
      path.dirname(srcFilePath),
      dstFilePath,
      fileName.replace('.json', '.md'));
  fs.writeFileSync(dstFilePath, tree.doc.join('\n'));
  console.log('Converted file: ' + dstFilePath);
};
