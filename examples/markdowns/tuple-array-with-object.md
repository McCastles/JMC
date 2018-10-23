# __Tuple array schema with object__
Parsed from file: [tuple-array-with-object.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array-with-object.json)

_Schema with a tuple array (array with items of different types), one of which is an object_
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|Famous people|
### __people__
_Famous people_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|string|-|Name of the person|
|__Item2__|boolean|-|Is male?|
|__Item3__|number|-|Telephone number of the person|
|__Item4__|[object](#Item4)|-|Children of the person|
### __Item4__
_Children of the person_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|string|+|Name of the kid|
|__surname__|string|+|Surname of the kid|
|__telephone__|number|-|Telephone number of the kid|