const path = require('path');
const fs = require('fs');

module.exports = {
  slash: (dstPath) => {
    dstPath = dstPath.indexOf('./') == 0 ? '' : `./${dstPath}`;
    dstPath += dstPath.endsWith('/') ? '' : '/';
    return dstPath;
  },
  capitalize: (text) => {
    text = text.charAt(0).toUpperCase() + text.substr(1);
    return text;
  },
  outputCheck: (srcPath, dstPath, generatedName) => {
    if (!dstPath) dstPath = './markdowns/';
    dstPath = srcPath.replace('./', dstPath).concat('/');
    if (!fs.existsSync(dstPath)) {
      module.exports.mimicStructure(dstPath);
    }
    return dstPath + generatedName;
  },
  mimicStructure: (url) => {
    if (url !== '.') module.exports.mimicStructure(path.dirname(url));
    if (!fs.existsSync(url)) fs.mkdirSync(url);
  },
};
