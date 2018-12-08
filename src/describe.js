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

  createRow: (node, key) => {
    const description = node.value.description ?
      describe.description(node.value) : 'Lack of descripton';
    const hash = {
      'Name': `${node.name}`,
      'Type': `${node.type}`,
      'Format': `${node.format}`,
      'Description': `${description}`,
    };
    if (node.parent) {
      const name = format.getRefName(node.parent);
      const ref = node.parent.replace('.json', '.md');
      hash['Parent'] = `[${name}](${ref})`;
    }
    if (node.required) hash['Required'] = `${node.required}`;
    return template.substitute(key, hash);
  },

  getType: (name, value, refspace) => {
    let type = value.type;
    if (value.$ref && value.$ref.indexOf('http') !== 0) {
      type = describe.link(value.$ref, refspace);
      return type;
    }
    if (!type && value.enum) type = typeof value.enum[0];
    if (value.properties) type = `[object](#${name})`;
    if (value.items) {
      if (value.items.$ref) {
        type = `array of ${describe.link(value.items.$ref, refspace)}`;
      } else {
        type = ((value.items.type) && (value.items.type !== 'object')) ?
        `array of ${value.items.type}`
        : `[array](#${name})`;
      }
    }
    return type;
  },

  link(ref, refspace) {
    const refName = format.getRefName(ref);
    ref = ref.replace('.json', '.md');
    if (!ref.startsWith('#')) return `[${refName}](${ref})`;
    for (let i = 0; i < refspace.length; i++) {
      if (refspace[i] === refName) {
        return `[${refName}](${ref})`;
      }
    }
    return `[${refName}](#definitions)`;
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
