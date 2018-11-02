# __Simple Schema With Definitions__
Parsed from file: [simple-definitions.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-definitions.json)

_Simple schema with definitions_
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__billing_address__|[#address](#definitions)|-|Billing adress|
|__shipping_address__|[#address](#definitions)|-|Shipping adress|
## __Definitions__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__address__|string|-|The addres of somebody|
## __Example__
```
{
    "billing_address": "Sample string",
    "shipping_address": "Sample string"
}
```