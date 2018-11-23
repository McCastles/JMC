# __Simple Schema With Definitions__
> Simple schema with definitions

Parsed from file: [simple-definitions.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-definitions.json)
* [Properties](#properties)
	* [billing_address](#properties)
	* [shipping_address](#properties)
* [Definitions](#definitions)
	* [address](#definitions)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__billing_address__|[address](#definitions)|-|Billing adress|
|__shipping_address__|[address](#definitions)|-|Shipping adress|
## __Definitions__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__address__|string|-|The addres of somebody|
## __Example__
```
{
    "billing_address": {},
    "shipping_address": {}
}
```