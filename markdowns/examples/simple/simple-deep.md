# __Simple deep schema__
Parsed from file: [simple-deep.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-deep.json)

_Simple deep_
## Table of Contents
* [Properties](#properties)
	* [planet](#planet)
		* [continent](#continent)
			* [country](#country)
				* [city](#country)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__planet__|[object](#planet)|+|Your planet|
### __planet__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__continent__|[object](#continent)|-|Your continent|
### __continent__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__country__|[object](#country)|-|Your country|
### __country__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__city__|string|-|Your city|
## __Example__
```
{
    "planet": {
        "continent": {
            "country": {
                "city": "Sample string"
            }
        }
    }
}
```