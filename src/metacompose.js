const fs = require('fs');
const path = require('path');
const tree = require('./tree.js');
const template = require('./template.js');
const format = require('./format.js');

/* TODO
* input
* ДОДЕЛАТЬ ПРОПЕРТИ С ALLOF !
* description of meta-sourced fields in Properties
* documentHard
* table of contents
* reference -> Definitions
* Any additional properties
* Examples
*/

module.exports = (srcFilePath, dstFilePath, customTemplateFileName) => {
  if (!srcFilePath.endsWith('.json')) return;
  const fileName = path.basename(srcFilePath);
  const schema = JSON.parse(fs.readFileSync(srcFilePath));

  template.init(customTemplateFileName);
  tree.init();
  tree.foreword(schema, fileName);

  for (let i = 0; i < schema.allOf.length; i++) {
    let extension = schema.allOf[i].$ref;
    extension = extension.substr(extension.lastIndexOf('/') + 1);
    const node = schema.definitions[extension];
    if (node.properties) {
      tree.propStructure =
        tree.visit(node.properties, node.required, extension);
    }
    if (node.$ref) {
      // console.log(JSON.parse(node.$ref));
    }
  };
  tree.defStructure = tree.visit(schema.definitions, schema.required);

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
  tree.initiateTable(false);
  tree.document(tree.propStructure);

  if (schema.definitions) {
    tree.doc.push(template.fetch('Definitions'));
    tree.initiateTable(true);
    tree.document(tree.defStructure, true);
  }

  dstFilePath = format.outputCheck(
      path.dirname(srcFilePath),
      dstFilePath,
      fileName.replace('.json', '.md'));
  fs.writeFileSync(dstFilePath, tree.doc.join('\n'));
  console.log('Converted file: ' + dstFilePath);
};
