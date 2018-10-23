const fs = require('fs');

const template = module.exports = {

  defaultJSON: undefined,
  customJSON: undefined,

  init: (customFileName) => {
    template.defaultJSON = JSON.parse(fs.readFileSync('./templates.json'));
    if (customFileName) {
      template.customJSON = JSON.parse(fs.readFileSync(customFileName));
    }
  },
  substitute: (key, hash) => {
    let temp = template.fetch(key);
    Object.keys(hash).forEach( (prop) =>
      temp = temp.replace(`{{${prop}}}`, hash[prop.toString()]));
    return temp;
  },
  fetch: (key) => {
    if (template.customJSON) {
      return fs.readFileSync(template.customJSON[key]).toString();
    } else {
      return fs.readFileSync(template.defaultJSON[key]).toString();
    }
  },
  fetchTypePrompt: (type) => {
    switch (type) {
      case 'string': return `\'${template.fetch('StringPrompt')}\'`;
      case 'number': return template.fetch('NumberPrompt');
      case 'boolean': return template.fetch('BooleanPrompt');
      default: return '';
    }
  },
};
