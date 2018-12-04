# __Schema With Definitions__
> Schema with definitions

Parsed from file: [more-definitions.json](https://github.com/McCastles/JMC/blob/master/examples/more-definitions.json)
* [Properties](#properties)
	* [priceArray](#properties)
	* [name](#name)
		* [firstName](#name)
		* [secondName](#name)
	* [billing_address](#properties)
	* [shipping_address](#properties)
* [Definitions](#definitions)
	* [price](#definitions)
	* [address](#address)
		* [street](#address)
		* [city](#address)
		* [state](#address)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__priceArray__|[price[]](#definitions)|-|Lack of descripton|
|__name__|[object](#name)|-|Name of the client|
|__billing_address__|[address](#address)|-|Billing adress|
|__shipping_address__|[address](#address)|-|Shipping adress|
### __name__
_Name of the client_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|First name|
|__secondName__|string|+|Second name|
## __Definitions__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__price__|number|-|Price of the product|
|__address__|[object](#address)|-|The addres of somebody|
### __address__
_The addres of somebody_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__street__|string|+|Street adress|
|__city__|string|+|Current city|
|__state__|string|+|Current state|
## __Example__
```
{
    "priceArray": [],
    "name": {
        "firstName": "Sample string",
        "secondName": "Sample string"
    },
    "billing_address": {
        "street": "Sample string",
        "city": "Sample string",
        "state": "Sample string"
    },
    "shipping_address": {
        "street": "Sample string",
        "city": "Sample string",
        "state": "Sample string"
    }
}
```