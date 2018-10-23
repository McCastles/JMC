# __Example Array With Object Enum Schema__
Parsed from file: [tuple-array-with-object-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-array-with-object-enum.json)

_Simple schema with array (one of the values is an object) with enumerated values_
## __Structure__
|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|List of guests|
### __people__
_List of guests_
|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|string|-|Guest's surname Possible values: `Lennon` `McCartney` `Harrison` `Starr`|
|__Item2__|number|-|Place|
|__Item3__|[object](#Item3)|-|Children of the person|
### __Item3__
_Children of the person_
|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|string|+|Name of the kid|
|__surname__|string|+|Surname of the kid|
|__telephone__|number|-|Telephone number of the kid|
