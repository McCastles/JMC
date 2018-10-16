const template = require("./template.js");
const format = require("./format.js");

const example = module.exports = {
    finalExample: [],
    definitions: undefined,

    createExample: (schema) => {
        finalExample = [];
        definitions = schema.definitions;
        // console.log(definitions);

        finalExample.push("```");
        finalExample.push("{");
        example.content(schema.properties, "\t");
        finalExample.push("}");
        finalExample.push("```");
        return finalExample.join("\n");
    },

    content: (branch, tab) => {

        
        let namespace = Object.keys(branch);

        // console.log("");
        // console.log(branch);
        // console.log(namespace);

        for (let i = 0; i < namespace.length; i++) {
            let key = namespace[i];
            const value = branch[key];
            let tabKey = `${tab}` + (Number.isNaN(parseInt(key)) ? `\"${key}\": ` : "");
            const comma = (i == namespace.length - 1) ? "" : ",";

            if (value.properties) 
                example.applyProperties(value, tabKey, comma, tab);
            
            else if (value.items) 
                example.applyItems(value, tabKey, comma, tab);
            
            else if (value.enum) 
                example.applyEnum(value, tabKey, comma);           

            else if (value.$ref) 
                example.applyReference(value, tabKey, comma, tab);

            else finalExample.push(tabKey + template.fetchTypePrompt(value.type) + comma);
        }
    },

    applyProperties: (value, tabKey, comma, tab) => {
        finalExample.push(tabKey + "{");
        example.content(value.properties, tab + "\t");
        finalExample.push(tab + "}" + comma);
    },

    applyItems: (value, tabKey, comma, tab) => {
        finalExample.push(tabKey + "[");
                if (value.items.type) 
                    finalExample.push(tabKey + 
                    `${template.fetchTypePrompt(value.items.type)}` + comma);
                else
                    example.content(value.items, tab + "\t");
                finalExample.push(tab + "]" + comma);
    },

    applyEnum: (value, tabKey, comma) => {
        const tmp = (typeof value.default == "string") ? `\"${value.default}\"` : value.enum[0];
            finalExample.push(tabKey + tmp + comma);
    },

    applyReference: (value, tabKey, comma, tab) => {
        finalExample.push(tabKey + "{");
                const def = format.getDefName(value.$ref);
                console.log("");
                console.log(definitions[def]);
                // example.content(definitions[def], tab + "\t");
                finalExample.push(tab + "}" + comma);
    },

};



