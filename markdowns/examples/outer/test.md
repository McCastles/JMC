# __Testing Link With outerDef__
> Illustrating work with outer definitions file

Parsed from file: [test.json](https://github.com/McCastles/JMC/blob/master/examples/outer/test.json)
* [Properties](#properties)
	* [name](#name)
		* [firstName](#name)
		* [secondName](#name)
	* [billing_address](#properties)
	* [shipping_address](#properties)
	* [car](#properties)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|Name of the client|
|__billing_address__|[proxyAddress](./definitions/proxy.md#proxyAddress)|-|Billing adress|
|__shipping_address__|[proxyAddress](./definitions/proxy.md#proxyAddress)|-|Shipping adress|
|__car__|[proxyAutomobile](./definitions/proxy.md#proxyAutomobile)|-|The automobile that will deliver the package|
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
    "billing_address": {},
    "shipping_address": {},
    "car": {}
}
```