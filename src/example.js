const template = require("./template.js");
const format = require("./format.js");

const example = module.exports = {
    finalExample: [],
    definitions: undefined,

    createExample: (schema) => {
        finalExample = [];
        definitions = schema.definitions;
        finalExample.push("```");
        finalExample.push("{");
        example.content(schema.properties, "\t");
        finalExample.push("}");
        finalExample.push("```");
        return finalExample.join("\n");
    },

    content: (branch, tab) => {
        const namespace = Object.keys(branch);
        for (let i = 0; i < namespace.length; i++) {
            const key = namespace[i];
            const comma = (i == namespace.length - 1) ? "" : ",";
            const tabKey = `${tab}` + (Number.isNaN(parseInt(key)) ? `\"${key}\": ` : "");
            example.apply(branch[key], tabKey, tab, comma);
        }
    },

    apply: (value, tabKey, tab, comma) => {
        if (value.properties) 
            example.applyProperties(value, tabKey, tab, comma);
        else if (value.items) 
            example.applyItems(value, tabKey, tab, comma);
        else if (value.enum) 
            example.applyEnum(value, tabKey, comma);
        else if (value.$ref) 
            example.applyReference(value, tabKey, tab, comma);
        else 
            finalExample.push(tabKey + template.fetchTypePrompt(value.type) + comma);
    },

    applyProperties: (value, tabKey, tab, comma) => {
        finalExample.push(tabKey + "{");
        example.content(value.properties, tab + "\t");
        finalExample.push(tab + "}" + comma);
    },

    applyItems: (value, tabKey, tab, comma) => {
        finalExample.push(tabKey + "[");
        if (value.items.type) 
            finalExample.push(tab + "\t" + 
            `${template.fetchTypePrompt(value.items.type)}` + comma);
        else
            example.content(value.items, tab + "\t");
        finalExample.push(tab + "]" + comma);
    },

    applyEnum: (value, tabKey, comma) => {
        const tmp = (typeof value.default == "string") ? `\"${value.default}\"` : value.enum[0];
        finalExample.push(tabKey + tmp + comma);
    },

    applyReference: (value, tabKey, tab, comma) => {
        const def = format.getDefName(value.$ref);
        example.apply(definitions[def], tabKey, tab, comma)
    },

};