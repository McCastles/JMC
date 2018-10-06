# __Definitions for outerTest__
Parsed from file: [testArray.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testArray.json)

_Illustrating work with outer definitions file._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|_Name of the client._|
|__adresses__|[#address](./definitions/proxy.md#address)|-|_Array of adresses._|
|__billing_address__|[#address](./definitions/proxy.md#address)|-|_Billing adress._|
|__automobile__|[#automobile](./definitions/proxy.md#automobile)|-|_The automobile that will deliver the package._|
### __name__
_Name of the client._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|_First name._|
|__secondName__|string|+|_Second name._|
## __Examples__
```
```