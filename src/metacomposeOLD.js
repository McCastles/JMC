const fs = require('fs');
// const example = require('./example.js');
const path = require('path');
// const format = require('./format.js');
const tree = require('./tree.js');
const template = require('./template.js');

/* TODO
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
  tree.doc.push('* [Properties](#properties)');
  tree.doc.push('* [Definitions](#definitions)');


  for (let i = 0; i < schema.allOf.length; i++) {
    let extension = schema.allOf[i].$ref;
    extension = extension.substr(extension.lastIndexOf('/') + 1);
    const node = schema.definitions[extension];
    if (node.properties) {
      tree.visit(node.properties, tree.propStructure, node.required, objectver);
    }
  };

  // откуда брать дескрипшн?
  // const aaa = {
  //   'title': schema.title,
  //   'description': schema.description,
  // };


  // console.log(tree.propStructure);

  tree.doc.push(template.fetch('Properties'));
  tree.initiateTable();
  tree.propStructure.forEach((element) => {
    tree.applyTable(element);
  });
  // tree.documentHard(tree.propStructure);

  tree.visit(schema.definitions, tree.defStructure, schema.required);
  if (schema.definitions) {
    tree.doc.push(template.fetch('Definitions'));
    tree.initiateTable();
    tree.document(tree.defStructure);
    tree.documentHard(tree.defStructure);
  }


  // console.log(schema.definitions);

  fs.writeFileSync('xferraexample.md', tree.doc.join('\n'));
};
