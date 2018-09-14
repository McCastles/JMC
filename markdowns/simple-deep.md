# Simple deep schema
Parsed from file: [simple-deep.json](https://github.com/McCastles/JMC/blob/master/examples/simple-deep.json)

Simple deep schema with four property and requirements.
## Structure

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|planet|[object](#planet)|+|Your planet.|
### planet
Your planet.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|continent|[object](#continent)|-|Your continent.|
### continent
Your continent.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|country|[object](#country)|-|Your country.|
### country
Your country.

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|city|string|-|Your city.|