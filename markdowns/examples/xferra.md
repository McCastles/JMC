# __Semantic JSON Schema__
> JSON & JSON meta-schema with versioning support

Parsed from file: [xferra.json](https://schema.linterhub.com/schemaver.json#)
* [Definitions](#definitions)
	* [reference](#definitions)
	* [version](#definitions)
	* [semver](#definitions)
	* [objectver](#objectver)
		* [$schema](#objectver)
		* [$id](#objectver)
		* [$version](#objectver)
	* [meta](#definitions)
## __Definitions__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__reference__|string|-|The reference to schemaver document in URI format|
|__version__|string|-|The version in a free format|
|__semver__|string|-|The semantic version (simplified format)|
|__objectver__|[object](#objectver)|-|The versioned JSON object|
|__meta__|undefined|-|The official JSON meta-schema (draft-07)|
### __objectver__
_The versioned JSON object_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__$schema__|[reference](#definitions)|+|The reference to schemaver document used for validation|
|__$id__|[reference](#definitions)|+|The reference to the latest version of itself|
|__$version__|[semver](#definitions)|+|The semantic version (simplified format)|