# Testing Link With outerDef
Parsed from file: [outerTest.json](https://github.com/McCastles/JMC/blob/master/examples/outerTest.json)

Illustrating work with outer definitions file.
## Structure

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|name|[object](#name)|-|Name of the client.|
|billing_address|[address](./outerDef.md#/definitions/address)|-|Billing adress.|
|shipping_address|[address](./outerDef.md#/definitions/address)|-|Shipping adress.|
### name
Name of the client.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|firstName|string|-|First name.|
|secondName|string|+|Second name.|