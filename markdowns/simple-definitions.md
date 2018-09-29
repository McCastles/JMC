# _Simple Schema With Definitions_
__Parsed from file:__ [simple-definitions.json](https://github.com/McCastles/JMC/blob/master/examples/simple-definitions.json)

__Simple schema with definitions.__
## __Definitions__
### address

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|street|string|+|Street adress.|
|city|string|+|Current city.|
|state|string|+|Current state.|
## Structure

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|name|[object](#name)|-|Name of the client.|
|billing_address|[address](#/definitions/address)|-|Billing adress.|
|shipping_address|[address](#/definitions/address)|-|Shipping adress.|
### name
Name of the client.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|firstName|string|-|First name.|
|secondName|string|+|Second name.|
