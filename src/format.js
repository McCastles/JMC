const template = require('./template.js');
const path = require('path');
const fs = require('fs');

module.exports = {
  capitalize: (text) => {
    text = text.charAt(0).toUpperCase() + text.substr(1);
    return text;
  },
  row: (name, type, required, description) => {
    return template.substitute('Row', {
      'Name': `${name}`,
      'Type': `${type}`,
      'Required': `${required}`,
      'Description': `${description}`,
    });
  },
  outputCheck: (srcPath, dstPath, generatedName) => {
    srcPath = path.dirname(srcPath);
    let finalPath = srcPath + '/markdowns/';
    if (dstPath) finalPath = dstPath.replace('.', srcPath).concat('/');
    if (!fs.existsSync(finalPath)) fs.mkdirSync(finalPath);
    return finalPath + generatedName;
  },
};
