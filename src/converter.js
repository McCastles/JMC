'use strict';

const fs = require('fs');
const example = require('./example.js');
const path = require('path');
const glob = require('glob');
const format = require('./format.js');
const tree = require('./tree.js');
const template = require('./template.js');

Object.defineProperty(String.prototype, "getRefName", {
  value: function getRefName() {
    return this.substr(this.indexOf('#') + 1);
  },
  writable: true,
  configurable: true
});

module.exports = (srcPath, dstPath, customTemplateFileName) => {
  if (dstPath && !dstPath.endsWith('/')) dstPath += '/';
  prepare(srcPath, dstPath, customTemplateFileName);
};

const prepare = (srcPath, dstPath, customTemplateFileName) => {
  let jsonFiles = undefined;
  let subDirs = undefined;
  if (srcPath.endsWith('.json')) {
    jsonFiles = glob.sync(srcPath);
    if (jsonFiles.length == 0) {
      console.log('ERROR: Fitting JSON file are not found.');
      return;
    }
  } else {
    jsonFiles = glob.sync(srcPath + '*.json');
    subDirs = glob.sync(srcPath + '*/');
    subDirs.forEach((dir) => prepare(dir, dstPath, customTemplateFileName));
  }
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

  tree.visitProp(undefined, schema);
  tree.visitDef(schema);

  if (schema.properties) {
    tree.doc.push(template.fetch('Structure'));
    tree.propStructure.forEach((pair) =>
      tree.document(pair.name, pair.node));
  }

  if (schema.definitions) {
    tree.doc.push(template.fetch('Definitions'));
    tree.documentDef();
  }

  tree.doc.push(template.fetch('Example'));
  tree.doc.push('```');
  tree.doc.push(JSON.stringify(
      example.createExample(schema, tree.defStructure), null, 4));
  tree.doc.push('```');
  dstFilePath = format.outputCheck(path.dirname(srcFilePath), dstFilePath,
      fileName.replace('.json', '.md'));
  fs.writeFileSync(dstFilePath, tree.doc.join('\n'));
  console.log('Converted file: ' + dstFilePath);
};
