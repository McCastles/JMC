# __Simple deep schema__

Parsed from file: [simple-deep.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-deep.json)
> Simple deep
* [Properties](#properties)
	* [planet](#planet)
		* [continent](#continent)
			* [country](#country)
## __Properties__

|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__planet__|[object](#planet)|*|+|Your planet|
### __planet__
_Your planet_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__continent__|[object](#continent)|*|-|[planet](planet)|Your continent|
### __continent__
_Your continent_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__country__|[object](#country)|*|-|[continent](continent)|Your country|
### __country__
_Your country_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__city__|string|*|-|[country](country)|Your city|