const template = require("./template.js");
const fs = require("fs");
/* eslint-disable-next-line no-unused-vars */
const format = module.exports = {
	required: (is) => is ? "+" : "-",
	changeExtention: (text) => text.replace(".json", ".md"),
	dirPath: (name) => name.endsWith("/") ? name : name + "/",
	capitalize: (text) => {
		text = text.charAt(0).toUpperCase() + text.substr(1);
		if (!text.endsWith(".")) text += ".";
		return text;
	},
	table: {
		row: (name, type, required, description) => {
			return template.substitute("Row",
				{"name":`${name}`,"type":`${type}`,"required":`${required}`,"description":`${description}`});
		},
		type: (name, type) => `[${type}](#${name})`,
	},
	getDefName: (name) => {
		let pointOfRef = "#/definitions/";
		return name.substr( name.indexOf(pointOfRef) + pointOfRef.length ); 
	},
	outputCheck: (outputDirName, generatedName) => {
		outputDirName = outputDirName ? format.dirPath(outputDirName) : "./markdowns/";
		if (!fs.existsSync(outputDirName)) fs.mkdirSync(outputDirName);
		return outputDirName + generatedName;
	}
};