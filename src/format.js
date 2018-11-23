const path = require('path');
const fs = require('fs');

const format = module.exports = {
  slash: (dstPath) => {
    dstPath = dstPath.indexOf('./') == 0 ? '' : `./${dstPath}`;
    dstPath += dstPath.endsWith('/') ? '' : '/';
    return dstPath;
  },
  toCaptal: (text) => {
    text = text.charAt(0).toUpperCase() + text.substr(1);
    return text;
  },
  outputCheck: (srcPath, dstPath, generatedName) => {
    if (!dstPath) dstPath = './markdowns/';
    dstPath = srcPath.replace('./', dstPath).concat('/');
    if (!fs.existsSync(dstPath)) {
      format.mimicStructure(dstPath);
    }
    return dstPath + generatedName;
  },
  mimicStructure: (url) => {
    if (url !== '.') format.mimicStructure(path.dirname(url));
    if (!fs.existsSync(url)) fs.mkdirSync(url);
  },
  getRefName: (reference) => {
    const a = reference.lastIndexOf('/');
    const b = reference.lastIndexOf('#');
    return reference.substr((a > b ? a : b) + 1);
  },
};
