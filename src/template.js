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
    const val = template.customJSON ? template.customJSON[key] : undefined;
    return fs.readFileSync(val ? val : template.defaultJSON[key]).toString();
  },
  fetchTypePrompt: (type) => {
    switch (type) {
      case 'object': return {};
      case 'array': return [];
      case 'string': return template.fetch('PromptString');
      case 'number': return Number(template.fetch('PromptNumber'));
      case 'boolean': return template.fetch('PromptBoolean');
      default: return '';
    }
  },
  fetchRefPrompt: (name, defStructure) => {
    for (let i = 0; i < defStructure.length; i++) {
      if (defStructure[i].name === name) {
        return template.fetchTypePrompt(defStructure[i].node.type);
      }
    }
  },
};
