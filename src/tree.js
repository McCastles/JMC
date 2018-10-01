const format = require("./format.js");
const describe = require("./describe.js");
const template = require("./template.js");

const tree = module.exports = {
	types: [],
	defs: [],
	described: [],
	doc: [],
	visited_refs: [],

	init: () => { tree.types = []; tree.defs = []; 
		tree.described = []; tree.doc = []; tree.visited_refs = []; },

	visit: (name, node, branch) => {
		if (!node) return;

		/* for definitions */
		if (node.definitions) {
			// tree.defs.push({ name: name, node: node });
			Object.keys(node.definitions).forEach((def) => 
				tree.visit(def, node.definitions[def], tree.defs));
		}

		/* for object properties */
		if (node.properties) {
			branch.push({ name: name, node: node });
			Object.keys(node.properties).forEach((prop) => 
				tree.visit(prop, node.properties[prop], branch));
		}

		/* for tuple arrays */
		if (node.items && !node.items.type && !node.items.$ref) {
			branch.push({ name: name, node: node });
			for (let i = 0; i < node.items.length; i++)
				tree.visit(template.fetch("Item") + (i+1), node.items[i], branch);
		}

		/* for references */
		if (node.$ref) {
			if (tree.visited_refs[node.$ref] === undefined) {
				tree.visited_refs[node.$ref] = true;
				const ref = Object.resolve(node.$ref, node);
				tree.visit(node.$ref, ref);
			}
		}
	},
	
	initiateTable : () => {
		tree.doc.push("");
		tree.doc.push(template.fetch("TableHeader"));
		tree.doc.push(template.fetch("TableColumns"));
	},

	documentDef : (node) => {
		tree.initiateTable();
		Object.keys(node.definitions).forEach((def) => {
			const value = node.definitions[def];
			const row = describe.property(def, value, false);
			tree.doc.push(row); 
		});
	},

	document: (name, node) => {
		if (name) { 
			tree.doc.push(template.substitute("SubTitle", {"subtitle": name}));
			if (node.description) 
				tree.doc.push( template.substitute("SubDescription", 
				{"subdescription": format.capitalize(node.description)}) );
		};

		tree.initiateTable();		

		/* for objects */
		if (node.properties) {
			Object.keys(node.properties).forEach((prop) => {
				const value = node.properties[prop];
				const required = node.required ? node.required.indexOf(prop) > -1 : false;
				const row = describe.property(prop, value, required);
				tree.doc.push(row);
			});
		};

		/* for arrays */
		if (node.items)
			for (let i = 0; i < node.items.length; i++)
			{
				const name = template.fetch("Item") + (i+1);
				const value = node.items[i];
				const row = describe.property(name, value, false);
				tree.doc.push(row);
			};

		/* for references */
		
	},
};