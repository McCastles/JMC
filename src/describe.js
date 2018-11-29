const format = require('./format.js');
const template = require('./template.js');

const describe = module.exports = {
  fill: (array, name) => {
    const newObj = {};
    for (let i = 0; i < array.length; i++) {
      newObj[format.giveName(name, i)] = array[i];
    };
    return newObj;
  },
  property: (node, defStructure) => {
    const type = describe.type(node.name, node.value, defStructure);
    const description = node.value.description ?
      describe.description(node.value) : 'Lack of descripton';
    let key;
    let hash;
    if (node.parent) {
      key = 'ChildRow';
      hash = {
        'Name': `${node.name}`,
        'Type': `${type}`,
        'Format': `${node.format}`,
        'Required': `${node.required}`,
        'Parent': `[${node.parent}](${node.parent})`,
        'Description': `${description}`,
      };
    } else {
      key = 'RootRow';
      hash = {
        'Name': `${node.name}`,
        'Type': `${type}`,
        'Format': `${node.format}`,
        'Required': `${node.required}`,
        'Description': `${description}`,
      };
    }
    return template.substitute(key, hash);
  },

  type: (name, value, defStructure) => {
    let type = value.type;
    if (value.properties) type = `[${type}](#${name})`;
    if (type === 'array') {
      if (value.items.$ref) {
        type = describe.typeHandleReferences(
            value.items.$ref,
            defStructure,
            'array of');
      } else {
        type = (value.items.type) ?
          `array of ${value.items.type}` : `[tuple array](#${name})`;
      }
    }
    if (value.$ref && value.$ref.indexOf('http') !== 0) {
      type = describe.typeHandleReferences(value.$ref, defStructure, '');
    }
    return type;
  },
  typeHandleReferences(reference, defStructure, arrayOf) {
    const name = format.getRefName(reference);
    let ref = reference.replace('.json', '.md');
    for (let i = 0; i < defStructure.length; i++) {
      if ((defStructure[i].name === name) && (defStructure[i].hard === false)) {
        ref = '#definitions';
        break;
      }
    }
    return `${arrayOf} [${name}](${ref})`;
  },
  description: (value) => {
    let finalDescription = format.toCaptal(value.description);
    if (value.enum) {
      finalDescription += '. Possible values:' +
        value.enum.map((v) =>
        ((typeof v) === value.type) ? ` \`${v}\`` : '').join('');
      if (value.default) {
        finalDescription += '. Default is `' + value.default + '`.';
      }
    }
    if (value.items && value.items.enum) {
      finalDescription += '. Possible values:' +
        value.items.enum.map((v) =>
        ((typeof v) === value.items.type) ? ` \`${v}\`` : '').join('');
      if (value.items.default) {
        finalDescription += '. Default is `' + value.items.default + '`.';
      }
    }
    return finalDescription;
  },
};
