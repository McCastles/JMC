# Testing Links With outerDef (tuple arrays)
Parsed from file: [outerTupleArray.json](https://github.com/McCastles/JMC/blob/master/examples/outerTupleArray.json)

Illustrating work with outer definitions file.
## Structure

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|name|[object](#name)|-|Name of the client.|
|arrayOfAdressPlusName|[object[]](#arrayOfAdressPlusName)|-|Tuple array with references.|
|billing_address|[address](./outerDef.md#/definitions/address)|-|Billing adress.|
|shipping_address|[address](./outerDef.md#/definitions/address)|-|Shipping adress.|
### name
Name of the client.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|firstName|string|-|First name.|
|secondName|string|+|Second name.|
### arrayOfAdressPlusName
Tuple array with references.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|item1|number|-|Sample number item.|
|item2|[address](./outerDef.md#/definitions/address)|-|Sample reference item.|
|item3|[object](#item3)|-|Sample object item.|
### item3
Sample object item.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|prop1|number|-|Sample property.|