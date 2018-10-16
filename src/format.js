const template = require("./template.js");
const fs = require("fs");

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
		hasOwnTable: (name, hardDefinitions) => {
			for (let i = 0; i < hardDefinitions.length; i++) 
				if (hardDefinitions[i].name === name) return true;
			return false;
		}
	},
	getDefName: (name) => {
		return name.substr( name.indexOf("#") + 1 ); 
	},
	outputCheck: (outputDirName, generatedName) => {
		outputDirName = outputDirName ? format.dirPath(outputDirName) : "./markdowns/";
		if (!fs.existsSync(outputDirName)) fs.mkdirSync(outputDirName);
		return outputDirName + generatedName;
	}
};