# __Testing Links With outerDef (tuple arrays)__
Parsed from file: [outerTupleArray.json](https://github.com/McCastles/JMC/blob/master/examples/outerTupleArray.json)

_Illustrating work with outer definitions file._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|_Name of the client._|
|__arrayOfAdressPlusName__|[object[]](#arrayOfAdressPlusName)|-|_Tuple array with references._|
|__billing_address__|[address](./outerDef.md#/definitions/address)|-|_Billing adress._|
|__shipping_address__|[address](./outerDef.md#/definitions/address)|-|_Shipping adress._|
### __name__
_Name of the client._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|_First name._|
|__secondName__|string|+|_Second name._|
### __arrayOfAdressPlusName__
_Tuple array with references._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|number|-|_Sample number item._|
|__Item2__|[address](./outerDef.md#/definitions/address)|-|_Sample reference item._|
|__Item3__|[object](#Item3)|-|_Sample object item._|
### __Item3__
_Sample object item._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__prop1__|number|-|_Sample property._|