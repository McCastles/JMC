const format = require("./format.js");
const describe = require("./describe.js");

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
				tree.visit("item" + (i+1), node.items[i]);
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
		if (name) { tree.doc.push(format.h3(name));
			if (node.description) tree.doc.push(format.capitalize(node.description)); }

		tree.doc.push("");
		tree.doc.push(format.table.header());
		tree.doc.push(format.table.columns());

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
				const name = "item" + (i+1);
				const value = node.items[i];
				const required = false; /* is there a way to mark item as required? */
				const row = describe.property(name, value, required);
				tree.doc.push(row);
			}
	},

	// example: (nodeName, node) => {
	//		 let result = "";
	//		 const hasName = nodeName || nodeName == "";
	//		 if (!node) {
	//				 return result;
	//		 }
	//		 result += (hasName ? `"${nodeName}":` : "");
	//		 if (hasName && !node.properties && !node.items) {
	//				 result += node.type === "integer" ? 0 :
	//						 node.enum ? `"${node.enum[0]}"` :
	//								 node.type === "null" ? "null" :
	//										 node.type === "boolean" ? false :
	//												 node.type === "object" || node.$ref ? "{}" : `"${node.type}"`;
	//		 }
	//		 if (node.properties) {
	//				 const properties = Object.keys(node.properties).map((name) => tree.example(name, node.properties[name])).join(",");
	//				 result += `{${properties}}`;
	//		 }
	//		 result += (node.items ? `[${tree.example(undefined, node.items)}]` : "");

	//		 if (node.$ref && tree.visited_refs[node.$ref] === undefined) {
	//				 tree.visited_refs[node.$ref] = true;
	//				 result += tree.example(undefined, Object.resolve(node.$ref, node));
	//		 }
	//		 return result;
	// }
};