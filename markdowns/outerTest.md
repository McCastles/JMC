# __Testing Link With outerDef__
Parsed from file: [outerTest.json](https://github.com/McCastles/JMC/blob/master/examples/outerTest.json)

_Illustrating work with outer definitions file._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|_Name of the client._|
|__billing_address__|[address](./outerDef.md#address)|-|_Billing adress._|
|__shipping_address__|[address](./outerDef.md#address)|-|_Shipping adress._|
### __name__
_Name of the client._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|_First name._|
|__secondName__|string|+|_Second name._|