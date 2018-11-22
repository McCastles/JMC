# __Simple deep schema__
Parsed from file: [simple-deep.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-deep.json)

> Simple deep
* [Properties](#properties)
	* [planet](#planet)
		* [continent](#continent)
			* [country](#country)
				* [city](#country)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__planet__|[object](#planet)|+|Your planet|
### __planet__
_Your planet_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__continent__|[object](#continent)|-|Your continent|
### __continent__
_Your continent_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__country__|[object](#country)|-|Your country|
### __country__
_Your country_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__city__|string|-|Your city|