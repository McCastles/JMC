# __Definitions for miscellaneous schemas__

Parsed from file: [address.json](https://github.com/McCastles/JMC/blob/master/examples/outer/definitions/address.json)
> Definitions for outerTest and other schemas
* [Definitions](#definitions)
	* [address](#address)
## __Definitions__
|Key|Type|Format|Description|
|-|:-:|:-:|-|
|__address__|[object](#address)|*|Lack of descripton|
### __address__
|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__house__|number|*|no|[address](#address)|House number|
|__street__|string|*|yes|[address](#address)|Street name|
|__city__|string|*|yes|[address](#address)|City name|
|__state__|string|*|yes|[address](#address)|State name|