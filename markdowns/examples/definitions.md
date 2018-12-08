# __Simple Schema With Definitions__

Parsed from file: [definitions.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-definitions.json)
> Simple schema with definitions
* [Properties](#properties)
	* [shipping_address](#shipping_address)
* [Definitions](#definitions)
	* [address](#address)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__shipping_address__|[object](#shipping_address)|*|yes|The shipping address - extends address|
### __shipping_address__
_The shipping address - extends address_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__street__|string|*|no|[address](#address)|Street adress|
|__city__|string|*|no|[address](#address)|Current city|
|__state__|string|*|no|[address](#address)|Current state|
|__type__|string|*|yes|[shipping_address](#shipping_address)|Business or Residental|
## __Definitions__
|Key|Type|Format|Description|
|-|:-:|:-:|-|
|__address__|[object](#address)|*|The addres of somebody|
### __address__
_The addres of somebody_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__street__|string|*|yes|[address](#address)|Street adress|
|__city__|string|*|yes|[address](#address)|Current city|
|__state__|string|*|yes|[address](#address)|Current state|