# __Definitions for outerTest__
Parsed from file: [testArray.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testArray.json)

> Illustrating work with outer definitions file
* [Properties](#properties)
	* [name](#name)
		* [firstName](#name)
		* [secondName](#name)
	* [adresses](#properties)
	* [billing_address](#properties)
	* [automobile](#properties)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|Name of the client|
|__adresses__|[[]](./definitions/proxy.md#proxyAddress)|-|Array of adresses|
|__billing_address__|[](./definitions/proxy.md#proxyAddress)|-|Billing adress|
|__automobile__|[le](./definitions/proxy.md#proxyAutomobile)|-|The automobile that will deliver the package|
### __name__
_Name of the client_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|First name|
|__secondName__|string|+|Second name|