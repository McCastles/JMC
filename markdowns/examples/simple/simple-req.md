# __Simple requirements schema__
Parsed from file: [simple-req.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-req.json)

_Simple schema_
## Table of Contents
* [Properties](#properties)
	* [street](#properties)
	* [city](#properties)
	* [telephone](#properties)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__street__|string|+|Street's name|
|__city__|string|+|City's name|
|__telephone__|number|-|Telephone number|
## __Example__
```
{
    "street": "Sample string",
    "city": "Sample string",
    "telephone": 42
}
```