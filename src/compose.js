const fs = require('fs');
// const example = require('./example.js');
const path = require('path');
const format = require('./format.js');
const tree = require('./tree.js');
const template = require('./template.js');

module.exports = (srcFilePath, dstFilePath, customTemplateFileName) => {
  if (!srcFilePath.endsWith('.json')) return;
  const fileName = path.basename(srcFilePath);
  const schema = JSON.parse(fs.readFileSync(srcFilePath));

  template.init(customTemplateFileName);
  tree.init();
  tree.foreword(schema, fileName);

  tree.doc.push(
      template.substitute(
          'Description',
          {'Description': format.toCaptal(schema.description)})
  );

  tree.propStructure = tree.visit(schema.properties, schema.required);
  tree.defStructure = tree.visit(schema.definitions, schema.required);

  if (schema.properties) {
    tree.doc.push('* [Properties](#properties)');
    tree.print(tree.propStructure, '\t');
  }
  if (schema.definitions) {
    tree.doc.push('* [Definitions](#definitions)');
    tree.print(tree.defStructure, '\t');
  }

  // if (tree.propStructure.length != 0) {
  //   tree.doc.push('* [Example](#example)');
  // }

  if (schema.properties) {
    tree.doc.push(template.fetch('Properties'));
    tree.initiateTable(true);
    tree.document(tree.propStructure);
  }

  if (schema.definitions) {
    tree.doc.push(template.fetch('Definitions'));
    tree.initiateTable(true);
    tree.document(tree.defStructure);
  }

  // if (tree.propStructure.length != 0) {
  //   tree.doc.push(template.fetch('Example'));
  //   tree.doc.push('```');
  //   tree.doc.push(JSON.stringify(
  //       example.createExample(schema, tree.defStructure), null, 4));
  //   tree.doc.push('```');
  // }

  dstFilePath = format.outputCheck(
      path.dirname(srcFilePath),
      dstFilePath,
      fileName.replace('.json', '.md'));
  fs.writeFileSync(dstFilePath, tree.doc.join('\n'));
  console.log('Converted file: ' + dstFilePath);
};
