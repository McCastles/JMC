const format = require("./format.js");
const describe = require("./describe.js");
const template = require("./template.js");

const tree = module.exports = {
	types: [],
	described: [],
	doc: [],
	visited_refs: [],

	init: () => {tree.types = []; tree.described = []; tree.doc = []; tree.visited_refs = [];},

	visit: (name, node) => {
		if (!node) return;

		/* for object properties */
		if (node.properties) {
			tree.types.push({ name: name, node: node });
			Object.keys(node.properties).forEach((name) => 
				tree.visit(name, node.properties[name]));
		}

		/* for tuple arrays */
		if (node.items && !node.items.type && !node.items.$ref) {
			tree.types.push({ name: name, node: node });
			for (let i = 0; i < node.items.length; i++)
				tree.visit(template.fetch("Item") + (i+1), node.items[i]);
		}

		/* for definitions */
		if (node.$ref) 
			if (tree.visited_refs[node.$ref] === undefined) {
				tree.visited_refs[node.$ref] = true;
				const ref = Object.resolve(node.$ref, node);
				tree.visit(node.$ref, ref);
			}
	},

	document: (name, node) => {
		if (name) { 
			tree.doc.push(template.substitute("SubTitle", {"subtitle": name}));
			if (node.description) 
				tree.doc.push( template.substitute("SubDescription", 
				{"subdescription": format.capitalize(node.description)}) ) }

		tree.doc.push("");
		tree.doc.push(template.fetch("TableHeader"));
		tree.doc.push(template.fetch("TableColumns"));

		/* for objects only */
		if (node.properties) {
			Object.keys(node.properties).forEach((name) => {
				const value = node.properties[name];
				const required = node.required ? node.required.indexOf(name) > -1 : false;
				const row = describe.property(name, value, required);
				tree.doc.push(row);
			});
		}
		/* for arrays */
		if (node.items)
			for (let i = 0; i < node.items.length; i++)
			{
				const name = template.fetch("Item") + (i+1);
				const value = node.items[i];
				const required = false; 
				const row = describe.property(name, value, required);
				tree.doc.push(row);
			}
	},
};