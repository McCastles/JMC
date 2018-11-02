const format = require('./format.js');

const describe = module.exports = {
  property: (name, value, required, defStructure) => {
    const type = describe.type(name, value, defStructure);
    const requiredText = required ? '+' : '-';
    const description = value.description ?
      describe.description(value) : 'Lack of descripton';
    return format.row(name, type, requiredText, description);
  },
  type: (name, value, defStructure) => {
    let type = value.type;
    if (value.properties) type = `[${type}](#${name})`;
    if (type === 'array') {
      if (value.items.$ref) {
        type = describe.typeHandleReferences(value.items.$ref, defStructure);
      } else {
        type = (value.items.type) ?
          `${value.items.type}[]` : `[object[]](#${name})`;
      }
    }
    if (value.$ref && value.$ref.indexOf('http') !== 0) {
      type = describe.typeHandleReferences(value.$ref, defStructure);
    }
    return type;
  },
  typeHandleReferences(reference, defStructure) {
    const name = reference.getRefName();
    let ref = reference.replace('.json', '.md');
    for (let i = 0; i < defStructure.length; i++) {
      if ((defStructure[i].name === name) && (defStructure[i].hard === false)) {
        ref = '#definitions';
        break;
      }
    }
    return `[#${name}](${ref})`;
  },
  description: (value) => {
    let finalDescription = format.capitalize(value.description);
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
