# __Definitions for miscellaneous schemas__

Parsed from file: [address.json](https://github.com/McCastles/JMC/blob/master/examples/outer/definitions/address.json)
> Definitions for outerTest and other schemas
* [Definitions](#definitions)
	* [address](#address)
## __Definitions__
|Key|Type|Format|Description|
|-|:-:|:-:|-|
|__address__|[object](#address)|*|The addres of somebody|
### __address__
_The addres of somebody_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__street__|string|*|yes|[address](#address)|Street adress|
|__city__|string|*|yes|[address](#address)|City name|
|__house__|number|*|yes|[address](#address)|House number|