"use strict";

const fs = require("fs");
const path = require("path");
const format = require("./format.js");
const tree = require("./tree.js");
const template = require("./template");

Object.resolve = (path, obj) => path.replace("#/", "").split("/").reduce((prev, curr) => prev ? prev[curr] : undefined, obj || null);

module.exports = function (srcPath, outputDirName) {
	/* dir/*.json is handled the same way as dir/ */
	if(!srcPath.basename) srcPath = srcPath.replace("*.json","");

	/* invalid JSON check */
	if(! (srcPath && typeof srcPath == "string" && fs.existsSync(srcPath)) ) {
		console.log("ERROR: Existing JSON file path is not provided."); return; }
	
	/* for folders convertations will be occur for each .json file */
	if (fs.lstatSync(srcPath).isDirectory()) {
		let jsonFiles = fs.readdirSync(srcPath);
		jsonFiles.forEach((file) => {compose(srcPath + file, outputDirName);});
	} else compose(srcPath, outputDirName);
};

const compose = (schema, outputDirName) => {
	if(!schema.endsWith(".json")) return;
	let fileName = path.basename(schema);
	tree.init();
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

	/* save to .md file */
	
	// if(outputDirName) {
	// 	outputDirName = format.outputCheck(outputDirName, );
	fs.writeFileSync(format.outputCheck(outputDirName, format.changeExtention(fileName)), tree.doc);
	// }
};