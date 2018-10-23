const template = require('./template.js');
const path = require('path');
const fs = require('fs');

module.exports = {
  required: (is) => is ? '+' : '-',
  changeExtention: (text) => text.replace('.json', '.md'),
  dirPath: (name) => name.endsWith('/') ? name : name + '/',
  capitalize: (text) => {
    text = text.charAt(0).toUpperCase() + text.substr(1);
    return text;
  },
  table: {
    row: (name, type, required, description) => {
      return template.substitute('Row', {
        'Name': `${name}`,
        'Type': `${type}`,
        'Required': `${required}`,
        'Description': `${description}`,
      });
    },
    type: (name, type) => `[${type}](#${name})`,
    hasOwnTable: (name, hardDefinitions) => {
      for (let i = 0; i < hardDefinitions.length; i++) {
        if (hardDefinitions[i].name === name) return true;
      }
      return false;
    },
  },
  getDefName: (name) => {
    return name.substr( name.indexOf('#') + 1 );
  },
  outputCheck: (srcPath, dstPath, generatedName) => {
    srcPath = path.dirname(srcPath);
    let finalPath = srcPath + '/markdowns/';
    if (dstPath) finalPath = dstPath.replace('.', srcPath).concat('/');
    if (!fs.existsSync(finalPath)) fs.mkdirSync(finalPath);
    return finalPath + generatedName;
  },
};
