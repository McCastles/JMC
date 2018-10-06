# __Simple deep schema__
Parsed from file: [simple-deep.json](https://github.com/McCastles/JMC/blob/master/examples/simple-deep.json)

_Simple deep schema with four property and requirements._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__planet__|[object](#planet)|+|_Your planet._|
### __planet__
_Your planet._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__continent__|[object](#continent)|-|_Your continent._|
### __continent__
_Your continent._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__country__|[object](#country)|-|_Your country._|
### __country__
_Your country._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__city__|string|-|_Your city._|
## __Examples__
```
```