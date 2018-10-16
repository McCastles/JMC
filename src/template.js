const fs = require("fs");

const template = module.exports = {

	substitute: (templateFileName, hash) => {
		let temp = template.fetch(templateFileName);
		Object.keys(hash).forEach( (prop) => 
			temp = temp.replace(`{{${prop}}}`, hash[prop.toString()]));
		return temp; 
	}, 
	fetch: (templateFileName) => { 
		return fs.readFileSync(`./templates/${templateFileName}.txt`).toString();
	},
	fetchTypePrompt: (type) => {
		switch(type) {
			case "string": return `\"${template.fetch("StringPrompt")}\"`;
			case "number": return template.fetch("NumberPrompt");
			case "boolean": return template.fetch("BooleanPrompt");
			default: return "";
		}
	}
};