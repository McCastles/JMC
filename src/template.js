const fs = require("fs");

const template = module.exports = {

	/* generate defaults? check if absent */
	substitute: (templateFileName, hash) => {
		let temp = template.fetch(templateFileName);
		Object.keys(hash).forEach( (prop) => 
			temp = temp.replace(`{{${prop}}}`, hash[prop.toString()]));
		return temp; 
	}, 
	fetch: (templateFileName) => { 
		return fs.readFileSync(`./templates/${templateFileName}.txt`).toString(); }
};