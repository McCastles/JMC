# __Example Schema__

Parsed from file: [definition-extension.json](https://github.com/McCastles/JMC/blob/master/examples/simple/advanced/definition-extension.json)
> Schema that illustrates definition extension
* [Properties](#properties)
	* [billing_address](#billing_address)
* [Definitions](#definitions)
	* [address](#address)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__billing_address__|[object](#billing_address)|*|no|The billing address - extends address|
### __billing_address__
_The billing address - extends address_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__street__|string|*|no|[address](#address)|Street adress|
|__city__|string|*|no|[address](#address)|City name|
|__house__|number|*|no|[address](#address)|House number|
|__type__|string|*|yes|[billing_address](#billing_address)|Business or Residental|
## __Definitions__
|Key|Type|Format|Description|
|-|:-:|:-:|-|
|__address__|[object](#address)|*|The addres of somebody|
### __address__
_The addres of somebody_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__street__|string|*|yes|[address](#address)|Street adress|
|__city__|string|*|yes|[address](#address)|City name|
|__house__|number|*|yes|[address](#address)|House number|