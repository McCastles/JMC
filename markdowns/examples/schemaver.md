# __Semantic JSON Schema__

Parsed from file: [schemaver.json](https://schema.linterhub.com/schemaver.json#)
> JSON & JSON meta-schema with versioning support
* [Definitions](#definitions)
	* [objectver](#objectver)
## __Definitions__
|Key|Type|Format|Description|
|-|:-:|:-:|-|
|__reference__|string|uri|The reference to schemaver document in URI format|
|__version__|string|*|The version in a free format|
|__semver__|string|regex|The semantic version (simplified format)|
|__objectver__|[object](#objectver)|*|The versioned JSON object|
|__meta__|string|*|The official JSON meta-schema (draft-07)|
### __objectver__
_The versioned JSON object_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__$schema__|[reference](#definitions)|*|yes|[objectver](objectver)|The reference to schemaver document used for validation|
|__$id__|[reference](#definitions)|*|yes|[objectver](objectver)|The reference to the latest version of itself|
|__$version__|[semver](#definitions)|*|yes|[objectver](objectver)|The semantic version (simplified format)|