const format = require('./format.js');

const describe = module.exports = {

  property: (name, value, required) => {
    const type = describe.type(name, value);
    const requiredText = format.required(required);
    const description = value.description ? describe.description(value) : '-';
    return format.table.row(name, type, requiredText, description);
  },

  description: (value) => {
    let finalDescription = format.capitalize(value.description);

    /* NOTE: only values of the value.type are allowed */
    /* for simple enums */
    if (value.enum) {
      finalDescription += " Possible values: " + 
        value.enum.map((v) => ((typeof v) === value.type) ? `\`${v}\`` : '').join(' ');
    if (value.default)
      finalDescription += "Default is `" + value.default + '`'; }

    /* for enums inside arrays */
    if (value.items && value.items.enum) {
      finalDescription += " Possible values: " + 
        value.items.enum.map((v) => ((typeof v) === value.items.type) ? `\`${v}\`` : '').join(' ');
    if (value.items.default)
      finalDescription += "Default is `" + value.items.default + '`'; }

    return finalDescription;
  },

  type: (name, value) => {
    let type = value.type;

    /* for objects */
    if (value.properties) 
      type = format.table.type(name, type);
    
    /* for arrays */
    if (type === 'array') 
      if (value.items.$ref) {
        ref = format.changeExtention(value.items.$ref);
        type = `[${format.getDefName(ref)}[]](${ref})`; } 
      else 
        type = (value.items.type) ? `${value.items.type}[]` : `[object[]](#${name})`;

    /* for definitions */
    if (value.$ref && value.$ref.indexOf('http') !== 0) {
      const name = format.getDefName(value.$ref);
      const file = format.changeExtention(value.$ref);
      type = `[${name}](${file})`;
    };

    return type;
  },
};