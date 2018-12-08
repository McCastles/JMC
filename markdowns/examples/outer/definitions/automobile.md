# __Definitions for miscellaneous schemas__

Parsed from file: [automobile.json](https://github.com/McCastles/JMC/blob/master/examples/outer/definitions/automobile.json)
> Definitions for outerTest and other schemas
* [Definitions](#definitions)
	* [automobile](#automobile)
## __Definitions__
|Key|Type|Format|Description|
|-|:-:|:-:|-|
|__automobile__|[object](#automobile)|*|Lack of descripton|
### __automobile__
|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__producent__|string|*|yes|[automobile](automobile)|Name of the producent company|
|__color__|string|*|no|[automobile](automobile)|Color of the auto|
|__year__|number|*|yes|[automobile](automobile)|Year of construction|