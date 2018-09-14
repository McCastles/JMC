# Definitions for outerTest
Parsed from file: [outerArray.json](https://github.com/McCastles/JMC/blob/master/examples/outerArray.json)

Illustrating work with outer definitions file.
## Structure

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|name|[object](#name)|-|Name of the client.|
|adresses|[address[]](./outerDef.md#/definitions/address)|-|Array of adresses.|
|billing_address|[address](./outerDef.md#/definitions/address)|-|Billing adress.|
|shipping_address|[address](./outerDef.md#/definitions/address)|-|Shipping adress.|
### name
Name of the client.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|firstName|string|-|First name.|
|secondName|string|+|Second name.|