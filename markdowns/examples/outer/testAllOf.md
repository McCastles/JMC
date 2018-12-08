# __Simple Schema With Definitions__

Parsed from file: [testAllOf.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-definitions.json)
> Simple schema with definitions
* [Properties](#properties)
	* [shipping_address](#shipping_address)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__shipping_address__|[object](#shipping_address)|*|yes|The shipping address - extends address|
### __shipping_address__
_The shipping address - extends address_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__house__|number|*|no|[address](./definitions/address.md#/definitions/address)|House number|
|__street__|string|*|no|[address](./definitions/address.md#/definitions/address)|Street name|
|__city__|string|*|no|[address](./definitions/address.md#/definitions/address)|City name|
|__state__|string|*|no|[address](./definitions/address.md#/definitions/address)|State name|
|__type__|string|*|yes|[shipping_address](#shipping_address)|Business or Residental|