# __Simple Schema With Definitions__
Parsed from file: [more-definitions.json](https://github.com/McCastles/JMC/blob/master/examples/simple-definitions.json)

_Simple schema with definitions._
## __Definitions__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__price__|number|-|_Price of the product._|
|__address__|[object](#address)|-|_The addres of somebody._|
### __address__
_The addres of somebody._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__street__|string|+|_Street adress._|
|__city__|string|+|_Current city._|
|__state__|string|+|_Current state._|
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|[object](#name)|-|_Name of the client._|
|__billing_address__|[address](#/definitions/address)|-|_Billing adress._|
|__shipping_address__|[address](#address)|-|_Shipping adress._|
|__price_to_pay__|[price](#/definitions/price)|-|_Price the customer will pay for the product._|
### __name__
_Name of the client._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__firstName__|string|-|_First name._|
|__secondName__|string|+|_Second name._|
