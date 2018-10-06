# __Testing Link With outerDef__
Parsed from file: [test.json](https://github.com/McCastles/JMC/blob/master/examples/outer/test.json)

_Illustrating work with outer definitions file._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|_Name of the client._|
|__billing_address__|[#proxyAddress](./definitions/proxy.md#proxyAddress)|-|_Billing adress._|
|__shipping_address__|[#proxyAddress](./definitions/proxy.md#proxyAddress)|-|_Shipping adress._|
|__car__|[#proxyAutomobile](./definitions/proxy.md#proxyAutomobile)|-|_The automobile that will deliver the package._|
### __name__
_Name of the client._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|_First name._|
|__secondName__|string|+|_Second name._|
## __Examples__
```
```