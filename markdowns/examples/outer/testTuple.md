# __Testing Links With outerDef (tuple arrays)__
> Illustrating work with outer definitions file

Parsed from file: [testTuple.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testTuple.json)
* [Properties](#properties)
	* [name](#name)
		* [firstName](#name)
		* [secondName](#name)
	* [arrayOfAdressPlusName](#arrayOfAdressPlusName)
		* [arrayOfAdressPlusName[0]](#arrayOfAdressPlusName)
		* [arrayOfAdressPlusName[1]](#arrayOfAdressPlusName)
		* [arrayOfAdressPlusName[2]](#arrayOfAdressPlusName[2])
			* [prop](#arrayOfAdressPlusName[2])
	* [billing_address](#properties)
	* [shipping_address](#properties)
	* [automobile](#properties)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|Name of the client|
|__arrayOfAdressPlusName__|[object[]](#arrayOfAdressPlusName)|-|Tuple array with references|
|__billing_address__|[proxyAddress](./definitions/proxy.md#proxyAddress)|-|Billing adress|
|__shipping_address__|[proxyAddress](./definitions/proxy.md#proxyAddress)|-|Shipping adress|
|__automobile__|[proxyAutomobile](./definitions/proxy.md#proxyAutomobile)|-|The automobile that will deliver the package|
### __name__
_Name of the client_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|First name|
|__secondName__|string|+|Second name|
### __arrayOfAdressPlusName__
_Tuple array with references_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__arrayOfAdressPlusName[0]__|number|-|Sample number item|
|__arrayOfAdressPlusName[1]__|[automobile](./definitions/proxy.md#automobile)|-|Sample reference item|
|__arrayOfAdressPlusName[2]__|[object](#arrayOfAdressPlusName[2])|-|Sample object item|
### __arrayOfAdressPlusName[2]__
_Sample object item_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__prop__|number|-|Sample property|
## __Example__
```
{
    "name": {
        "firstName": "Sample string",
        "secondName": "Sample string"
    },
    "arrayOfAdressPlusName": [
        42,
        {
            "prop": 42
        }
    ],
    "billing_address": {},
    "shipping_address": {},
    "automobile": {}
}
```