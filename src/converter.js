'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const format = require('./format.js');
const tree = require('./tree.js');
const template = require('./template.js');

module.exports = function prepare(srcPath, dstPath, customTemplateFileName) {
  if (! (srcPath && typeof srcPath == 'string' && fs.existsSync(srcPath)) ) {
    console.log('ERROR: Existing JSON file path is not provided.');
    return;
  }
  if (fs.lstatSync(srcPath).isDirectory()) {
    const subDirs = glob.sync(srcPath + '*/');
    subDirs.forEach((dir) => prepare(dir, dstPath, customTemplateFileName));
  }
  srcPath += fs.lstatSync(srcPath).isDirectory() ? '/*.json' : '';
  const jsonFiles = glob.sync(srcPath);
  jsonFiles.forEach((file) => compose(file, dstPath, customTemplateFileName));
};


const compose = (srcFilePath, dstFilePath, customTemplateFileName) => {
  if (!srcFilePath.endsWith('.json')) return;

  const fileName = path.basename(srcFilePath);
  const schema = JSON.parse(fs.readFileSync(srcFilePath));

  template.init(customTemplateFileName);
  tree.init(schema.definitions ? Object.keys(schema.definitions) : undefined);

  tree.doc.push(template.substitute('Title', {'Title': schema.title} ));
  tree.doc.push(template.substitute('ParsedFrom', schema.$id ?
    {'FileName': `[${fileName}]`, 'Link': `(${schema.$id})`} :
    {'FileName': fileName, 'Link': ''} ));
  tree.doc.push('');
  tree.doc.push(template.substitute('Description',
      {'Description': format.capitalize(schema.description)}));

  tree.visit(undefined, schema, tree.structure);

  if (schema.properties) {
    tree.doc.push(template.fetch('Structure'));
    tree.structure.forEach((type) => tree.document(type.name, type.node));
  }

  if (schema.definitions) {
    tree.doc.push(template.fetch('Definitions'));
    tree.documentDef(schema, tree);
    tree.hard_definitions.forEach((def) => tree.document(def.name, def.node));
  }

  /* ???? */
  // tree.doc.push(template.fetch('Example'));
  // tree.doc.push('```');
  // // tree.structure.forEach((type) =>
  // tree.doc.push(JSON.stringify(type.node.properties, null, 4)));
  // tree.doc.push(JSON.stringify(tree.structure[0].node.properties, null, 4));
  // tree.doc.push('```');
  // console.log(tree.structure[0].node.properties);

  dstFilePath = format.outputCheck(srcFilePath, dstFilePath,
      fileName.replace('.json', '.md'));
  fs.writeFileSync(dstFilePath, tree.doc.join('\n'));
  console.log('Converted file: ' + dstFilePath);
};
