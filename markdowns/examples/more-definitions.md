# __Schema With Definitions__

Parsed from file: [more-definitions.json](https://github.com/McCastles/JMC/blob/master/examples/more-definitions.json)
> Schema with definitions
* [Properties](#properties)
	* [name](#name)
* [Definitions](#definitions)
	* [address](#address)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__priceArray__|array of [price](#definitions)|*|no|Lack of descripton|
|__name__|[object](#name)|*|no|Name of the client|
|__billing_address__|[address](#address)|*|no|Billing adress|
|__shipping_address__|[address](#address)|*|no|Shipping adress|
### __name__
_Name of the client_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__firstName__|string|*|no|[name](#name)|First name|
|__secondName__|string|*|yes|[name](#name)|Second name|
## __Definitions__
|Key|Type|Format|Description|
|-|:-:|:-:|-|
|__price__|number|*|Price of the product|
|__address__|[object](#address)|*|The addres of somebody|
### __address__
_The addres of somebody_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__street__|string|*|yes|[address](#address)|Street adress|
|__city__|string|*|yes|[address](#address)|Current city|
|__state__|string|*|yes|[address](#address)|Current state|