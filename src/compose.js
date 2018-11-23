const fs = require('fs');
const example = require('./example.js');
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

  tree.visit(schema.definitions, tree.defStructure, schema.required);
  tree.visit(schema.properties, tree.propStructure, schema.required);

  // tree.doc.push('## Table of Contents');
  if (schema.properties) {
    tree.doc.push('* [Properties](#properties)');
    tree.tableOfContents(tree.propStructure, 'properties');
  }
  if (schema.definitions) {
    tree.doc.push('* [Definitions](#definitions)');
    tree.tableOfContents(tree.defStructure, 'definitions');
  }
  if (tree.propStructure.length != 0) {
    tree.doc.push('* [Example](#example)');
  }

  if (schema.properties) {
    tree.doc.push(template.fetch('Properties'));
    tree.initiateTable();
    tree.document(tree.propStructure);
    tree.documentHard(tree.propStructure);
  }

  if (schema.definitions) {
    tree.doc.push(template.fetch('Definitions'));
    tree.initiateTable();
    tree.document(tree.defStructure);
    tree.documentHard(tree.defStructure);
  }

  if (tree.propStructure.length != 0) {
    tree.doc.push(template.fetch('Example'));
    tree.doc.push('```');
    tree.doc.push(JSON.stringify(
        example.createExample(schema, tree.defStructure), null, 4));
    tree.doc.push('```');
  }

  dstFilePath = format.outputCheck(
      path.dirname(srcFilePath),
      dstFilePath,
      fileName.replace('.json', '.md'));
  fs.writeFileSync(dstFilePath, tree.doc.join('\n'));
  console.log('Converted file: ' + dstFilePath);
};
