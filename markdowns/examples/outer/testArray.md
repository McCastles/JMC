# __Definitions for outerTest__

Parsed from file: [testArray.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testArray.json)
> Illustrating work with outer definitions file
* [Properties](#properties)
	* [name](#name)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__name__|[object](#name)|*|no|Name of the client|
|__adresses__|[array of ]([proxyAddress](./definitions/proxy.md#proxyAddress))|*|no|Array of adresses|
|__billing_address__|[proxyAddress](./definitions/proxy.md#proxyAddress)|*|no|Billing adress|
|__automobile__|[proxyAutomobile](./definitions/proxy.md#proxyAutomobile)|*|no|The automobile that will deliver the package|
### __name__
_Name of the client_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__firstName__|string|*|no|[name](#name)|First name|
|__secondName__|string|*|yes|[name](#name)|Second name|