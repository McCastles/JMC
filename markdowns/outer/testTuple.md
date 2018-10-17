# __Testing Links With outerDef (tuple arrays)__
Parsed from file: [testTuple.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testTuple.json)

_Illustrating work with outer definitions file_
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|Name of the client|
|__arrayOfAdressPlusName__|[object[]](#arrayOfAdressPlusName)|-|Tuple array with references|
|__billing_address__|[#proxyAddress](./definitions/proxy.md#proxyAddress)|-|Billing adress|
|__shipping_address__|[#proxyAddress](./definitions/proxy.md#proxyAddress)|-|Shipping adress|
|__automobile__|[#proxyAutomobile](./definitions/proxy.md#proxyAutomobile)|-|The automobile that will deliver the package|
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
|__Item1__|number|-|Sample number item|
|__Item2__|[#automobile](./definitions/proxy.md#automobile)|-|Sample reference item|
|__Item3__|[object](#Item3)|-|Sample object item|
### __Item3__
_Sample object item_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__prop__|number|-|Sample property|