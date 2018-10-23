# __Schema With Definitions__
Parsed from file: [more-definitions.json](https://github.com/McCastles/JMC/blob/master/examples/more-definitions.json)

_Schema with definitions_
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|Name of the client|
|__billing_address__|[#address](#address)|-|Billing adress|
|__shipping_address__|[#address](#address)|-|Shipping adress|
|__price_to_pay__|[#price](#definitions)|-|Price the customer will pay for the product|
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