# __Simple Schema With Definitions__

Parsed from file: [definitions.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-definitions.json)
> Simple schema with definitions
* [Properties](#properties)
	* [name](#name)
	* [shipping_address](#shipping_address)
* [Definitions](#definitions)
	* [address](#address)
	* [testArray](#testArray)
		* [testArray[0]](#testArray[0])
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__name__|[object](#name)|*|-|Name of the client|
|__billing_address__|[address](#definitions)|*|-|Billing adress|
|__shipping_address__|[object](#shipping_address)|*|+|The shipping address - extends address|
### __name__
_Name of the client_
|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__firstName__|string|hostname|-|[name](name)|First name|
|__email__|string|email|+|[name](name)|Email|
### __shipping_address__
_The shipping address - extends address_
|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__street__|string|*|-|[shipping_address](shipping_address)|Street adress|
|__city__|string|*|-|[shipping_address](shipping_address)|Current city|
|__state__|string|*|-|[shipping_address](shipping_address)|Current state|
|__type__|string|*|+|[shipping_address](shipping_address)|Business or Residental|
## __Definitions__
|Key|Type|Format|Description|
|-|:-:|:-:|-|
|__address__|[object](#address)|*|The addres of somebody|
|__testArray__|[array](#testArray)|date-time|The array for testing|
### __address__
_The addres of somebody_
|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__street__|string|*|+|[address](address)|Street adress|
|__city__|string|*|+|[address](address)|Current city|
|__state__|string|*|+|[address](address)|Current state|
### __testArray__
_The array for testing_
|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__testArray[0]__|[object](#testArray[0])|*|-|[testArray](testArray)|Lack of descripton|
### __testArray[0]__
|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__p1__|string|regex|-|[testArray[0]](testArray[0])|Test property|