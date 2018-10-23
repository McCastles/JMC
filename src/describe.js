const format = require('./format.js');
const describe = module.exports = {

  property: (name, value, required, tree) => {
    const type = describe.type(name, value, tree);
    const requiredText = required ? '+' : '-';
    const description = value.description ?
      describe.description(value) : 'Lack of descripton';
    return format.row(name, type, requiredText, description);
  },

  type: (name, value, tree) => {
    let type = value.type;

    if (value.properties) type = `[${type}](#${name})`;

    if (type === 'array') {
      if (value.items.$ref) {
        type = describe.typeHandleReferences(value.items.$ref, tree);
      } else {
        type = (value.items.type) ?
          `${value.items.type}[]` : `[object[]](#${name})`;
      }
    }

    if (value.$ref && value.$ref.indexOf('http') !== 0) {
      type = describe.typeHandleReferences(value.$ref, tree);
    }

    return type;
  },

  typeHandleReferences(reference, tree) {
    const name = reference.substr(reference.indexOf('#') + 1);
    let ref = reference.replace('.json', '.md');
    if (tree.schema_definitions.indexOf(name) > -1) {
      if (! tree.hard_definitions.some( (def) => def.name === name) ) {
        ref = '#definitions';
      }
    }
    return `[#${name}](${ref})`;
  },

  description: (value) => {
    let finalDescription = format.capitalize(value.description);

    if (value.enum) {
      finalDescription += ' Possible values:' +
        value.enum.map((v) =>
        ((typeof v) === value.type) ? ` \`${v}\`` : '').join('');
      if (value.default) {
        finalDescription += '. Default is `' + value.default + '`.';
      }
    }

    if (value.items && value.items.enum) {
      finalDescription += ' Possible values:' +
        value.items.enum.map((v) =>
        ((typeof v) === value.items.type) ? ` \`${v}\`` : '').join('');
      if (value.items.default) {
        finalDescription += '. Default is `' + value.items.default + '`.';
      }
    }

    return finalDescription;
  },
};
