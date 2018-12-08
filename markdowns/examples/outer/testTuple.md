# __Testing Links With outerDef (tuple arrays)__

Parsed from file: [testTuple.json](https://github.com/McCastles/JMC/blob/master/examples/outer/testTuple.json)
> Illustrating work with outer definitions file
* [Properties](#properties)
	* [name](#name)
	* [arrayOfAdressPlusName](#arrayOfAdressPlusName)
		* [arrayOfAdressPlusName[2]](#arrayOfAdressPlusName[2])
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__name__|[object](#name)|*|no|Name of the client|
|__arrayOfAdressPlusName__|[array](arrayOfAdressPlusName)|*|no|Tuple array with references|
|__billing_address__|[proxyAddress](#definitions)|*|no|Billing adress|
|__shipping_address__|[proxyAddress](#definitions)|*|no|Shipping adress|
|__automobile__|[proxyAutomobile](#definitions)|*|no|The automobile that will deliver the package|
### __name__
_Name of the client_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__firstName__|string|*|no|[name](name)|First name|
|__secondName__|string|*|yes|[name](name)|Second name|
### __arrayOfAdressPlusName__
_Tuple array with references_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__arrayOfAdressPlusName[0]__|number|*|no|[arrayOfAdressPlusName](arrayOfAdressPlusName)|Sample number item|
|__arrayOfAdressPlusName[1]__|[automobile](#definitions)|*|no|[arrayOfAdressPlusName](arrayOfAdressPlusName)|Sample reference item|
|__arrayOfAdressPlusName[2]__|[object](#arrayOfAdressPlusName[2])|*|no|[arrayOfAdressPlusName](arrayOfAdressPlusName)|Sample object item|
### __arrayOfAdressPlusName[2]__
_Sample object item_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__prop__|number|*|no|[arrayOfAdressPlusName[2]](arrayOfAdressPlusName[2])|Sample property|