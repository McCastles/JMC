# __Example Array With Object Enum Schema__
Parsed from file: [simple-array-with-object-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple-array-with-object-enum.json)

_Simple schema with array (one of the values is an object) with enumerated values._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|_List of guests._|
### __people__
_List of guests._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|string|-|_Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`_|
|__Item2__|number|-|_Place._|
|__Item3__|[object](#Item3)|-|_Children of the person._|
### __Item3__
_Children of the person._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|string|+|_Name of the kid._|
|__surname__|string|+|_Surname of the kid._|
|__telephone__|number|-|_Telephone number of the kid._|
## __Examples__
```
```