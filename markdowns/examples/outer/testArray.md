# __Definitions for outerTest__
> Illustrating work with outer definitions file

Parsed from file: [testArray.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testArray.json)
* [Properties](#properties)
	* [name](#name)
		* [firstName](#name)
		* [secondName](#name)
	* [adresses](#properties)
	* [billing_address](#properties)
	* [automobile](#properties)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|Name of the client|
|__adresses__|[proxyAddress[]](./definitions/proxy.md#proxyAddress)|-|Array of adresses|
|__billing_address__|[proxyAddress](./definitions/proxy.md#proxyAddress)|-|Billing adress|
|__automobile__|[proxyAutomobile](./definitions/proxy.md#proxyAutomobile)|-|The automobile that will deliver the package|
### __name__
_Name of the client_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|First name|
|__secondName__|string|+|Second name|
## __Example__
```
{
    "name": {
        "firstName": "Sample string",
        "secondName": "Sample string"
    },
    "adresses": [],
    "billing_address": {},
    "automobile": {}
}
```