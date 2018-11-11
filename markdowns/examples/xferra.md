# __Versioned Schema__
Parsed from file: [xferra.json](https://schema.linterhub.com/schemaver.json)

_The meta-schema of versioned JSON schema_
## Table of Contents
* [Definitions](#definitions)
	* [schema](#definitions)
	* [object](#object)
		* [$version](#object)
		* [$schema](#object)
## __Definitions__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__schema__|object|-|The meta-schema of JSON schema|
|__object__|[object](#object)|-|The versioned object|
### __object__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__$version__|string|+|The version value|
|__$schema__|string|+|The parent schema uri|