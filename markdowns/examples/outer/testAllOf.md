# __Example Schema__

Parsed from file: [testAllOf.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testAllOf.json)
> Illustrating work with outer definitions file
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
|__street__|string|*|no|[address](./definitions/address.md#address)|Street adress|
|__city__|string|*|no|[address](./definitions/address.md#address)|City name|
|__house__|number|*|no|[address](./definitions/address.md#address)|House number|
|__type__|string|*|yes|[shipping_address](#shipping_address)|Business or Residental|