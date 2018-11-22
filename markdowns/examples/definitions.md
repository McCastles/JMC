# __Simple Schema With Definitions__
Parsed from file: [definitions.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-definitions.json)

> Simple schema with definitions
* [Properties](#properties)
	* [name](#name)
		* [firstName](#name)
		* [secondName](#name)
	* [billing_address](#properties)
	* [shipping_address](#properties)
* [Definitions](#definitions)
	* [address](#address)
		* [street](#address)
		* [city](#address)
		* [state](#address)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|Name of the client|
|__billing_address__|[s](#address)|-|Billing adress|
|__shipping_address__|[s](#address)|-|Shipping adress|
### __name__
_Name of the client_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|First name|
|__secondName__|string|+|Second name|
## __Definitions__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__address__|[object](#address)|-|The addres of somebody|
### __address__
_The addres of somebody_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__street__|string|+|Street adress|
|__city__|string|+|Current city|
|__state__|string|+|Current state|