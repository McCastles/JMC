# __Definitions for outerTest__
Parsed from file: [outerArray.json](https://github.com/McCastles/JMC/blob/master/examples/outerArray.json)

_Illustrating work with outer definitions file._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|_Name of the client._|
|__adresses__|[#address[]](./outerDef.md#address)|-|_Array of adresses._|
|__billing_address__|[on#address](./outerDef.md#address)|-|_Billing adress._|
|__shipping_address__|[on#address](./outerDef.md#address)|-|_Shipping adress._|
### __name__
_Name of the client._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|_First name._|
|__secondName__|string|+|_Second name._|