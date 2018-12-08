# __Testing Link With outerDef__

Parsed from file: [test.json](https://github.com/McCastles/JMC/blob/master/examples/outer/test.json)
> Illustrating work with outer definitions file
* [Properties](#properties)
	* [name](#name)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__name__|[object](#name)|*|no|Name of the client|
|__billing_address__|[proxyAddress](#definitions)|*|no|Billing adress|
|__shipping_address__|[proxyAddress](#definitions)|*|no|Shipping adress|
|__car__|[proxyAutomobile](#definitions)|*|no|The automobile that will deliver the package|
### __name__
_Name of the client_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__firstName__|string|*|no|[name](name)|First name|
|__secondName__|string|*|yes|[name](name)|Second name|