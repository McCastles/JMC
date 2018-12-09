# __Example Schema__

Parsed from file: [definition-object.json](https://github.com/McCastles/JMC/blob/master/examples/simple/advanced/definition-object.json)
> Schema with the definition which is object
* [Properties](#properties)
* [Definitions](#definitions)
	* [address](#address)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__shipping_address__|[address](#address)|*|yes|The shipping address|
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