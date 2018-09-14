'use strict';
const fs = require('fs');
const path = require('path');

Object.resolve = (path, obj) => path.replace('#/', '').split('/').reduce((prev, curr) => prev ? prev[curr] : undefined, obj || null);

const format = require('json-2-md-con/format');
const tree = require('json-2-md-con/tree');

/* TODO: 
* examples
* figure out refs
*/

module.exports.generate = function (schema, outputFileName) {
  
  tree.init();
  let fileName = path.basename(schema);
  outputFileName = format.outputCheck(outputFileName, format.changeExtention(fileName));

  /* if input path provided, extract object fron .json file */
  if (typeof schema == "string") 
    schema = JSON.parse(fs.readFileSync(schema));
  
  /* adding titles */
  tree.doc.push(format.h1(schema.title));
  tree.doc.push("Parsed from file: " + (schema.$id ? `[${fileName}](${schema.$id})` : fileName));
  tree.doc.push(''); 
  tree.doc.push(format.capitalize(schema.description));

  /* adding definitions */
  if(schema.definitions) {
    tree.doc.push(format.h2('Definitions'));
    Object.keys(schema.definitions).forEach((name) => {
      tree.visit(name, schema.definitions[name]); });
    tree.types.forEach((type) => tree.document(type.name, type.node));
    tree.types = [];
  }

  /* adding main structure */
  if (schema.properties) {
  tree.doc.push(format.h2('Structure'));
  tree.visit(undefined, schema); 
  // console.log(tree.types);
  tree.types.forEach((type) => tree.document(type.name, type.node));
  }


  /* adding example */
  // tree.doc.push(format.h2('Example'));
  // const example = tree.example(undefined, schema);
  // const jsonExample = JSON.stringify(JSON.parse(example), null, 4);
  // tree.doc.push('```');
  // tree.doc.push(jsonExample);
  // tree.doc.push('```'); 

  /* adding new line characters */
  tree.doc = tree.doc.join('\n');

  /* save to .md file */
  fs.writeFileSync(outputFileName, tree.doc);
  return tree.doc;
};