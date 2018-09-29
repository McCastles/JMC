"use strict";

const fs = require("fs");
const path = require("path");
const format = require("./format.js");
const tree = require("./tree.js");
const template = require("./template");

Object.resolve = (path, obj) => path.replace("#/", "").split("/").reduce((prev, curr) => prev ? prev[curr] : undefined, obj || null);

module.exports = function (schema, outputFileName) {
	if(!schema) {console.log("ERROR: JSON file path is not provided."); return;}
	tree.init();
	let fileName = path.basename(schema);
	
	/* if input path provided, extract object fron .json file */
	if (typeof schema == "string") 
		schema = JSON.parse(fs.readFileSync(schema));

	/* adding titles */
	tree.doc.push(template.substitute("Title", {"title" : schema.title} ));
	tree.doc.push(template.substitute("ParsedFrom", schema.$id ? 
		{"fileName" : `[${fileName}]`, "link": `(${schema.$id})`} :
		{"fileName" : fileName, "link" : ""} ));
	tree.doc.push(""); 
	tree.doc.push(template.substitute("Description", 
		{"description": format.capitalize(schema.description)}));

	/* adding definitions */
	if(schema.definitions) {
		tree.doc.push(template.fetch("Definitions"));
		Object.keys(schema.definitions).forEach((name) => {
			tree.visit(name, schema.definitions[name]); });
		tree.types.forEach((type) => tree.document(type.name, type.node));
		tree.types = [];
	}

	/* adding main structure */
	if (schema.properties) {
		tree.doc.push(template.fetch("Structure"));
		tree.visit(undefined, schema); 
		tree.types.forEach((type) => tree.document(type.name, type.node));
	}

	/* adding new line characters */
	tree.doc = tree.doc.join("\n");

	/* save to .md file if path of file or folder provided*/
	if(outputFileName) {
		outputFileName = format.outputCheck(outputFileName, format.changeExtention(fileName));
		fs.writeFileSync(outputFileName, tree.doc);
	}
	return tree.doc;
};