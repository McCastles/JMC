# __Testing Links With outerDef (tuple arrays)__
Parsed from file: [testTuple.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testTuple.json)

_Illustrating work with outer definitions file._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|_Name of the client._|
|__arrayOfAdressPlusName__|[object[]](#arrayOfAdressPlusName)|-|_Tuple array with references._|
|__billing_address__|[#automobile](./definitions/proxy.md#automobile)|-|_Billing adress._|
|__shipping_address__|[#automobile](./definitions/proxy.md#automobile)|-|_Shipping adress._|
|__automobile__|[#automobile](./definitions/proxy.md#automobile)|-|_The automobile that will deliver the package._|
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
|__Item2__|[#automobile](./definitions/proxy.md#automobile)|-|_Sample reference item._|
|__Item3__|[object](#Item3)|-|_Sample object item._|
### __Item3__
_Sample object item._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__prop1__|number|-|_Sample property._|
## __Examples__
```
```