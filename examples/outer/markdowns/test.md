# __Testing Link With outerDef__
Parsed from file: [test.json](https://github.com/McCastles/JMC/blob/master/examples/outer/test.json)

_Illustrating work with outer definitions file_
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|Name of the client|
|__billing_address__|[#proxyAddress](./definitions/proxy.md#proxyAddress)|-|Billing adress|
|__shipping_address__|[#proxyAddress](./definitions/proxy.md#proxyAddress)|-|Shipping adress|
|__car__|[#proxyAutomobile](./definitions/proxy.md#proxyAutomobile)|-|The automobile that will deliver the package|
### __name__
_Name of the client_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|First name|
|__secondName__|string|+|Second name|