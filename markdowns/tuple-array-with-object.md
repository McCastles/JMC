# __Tuple array schema with object__
Parsed from file: [tuple-array-with-object.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array-with-object.json)

_Schema with a tuple array (array with items of different types), one of which is an object._
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|_Famous people._|
### __people__
_Famous people._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|string|-|_Name of the person._|
|__Item2__|string|-|_Surname of the person._|
|__Item3__|number|-|_Telephone number of the person._|
|__Item4__|[object](#Item4)|-|_Children of the person._|
### __Item4__
_Children of the person._

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|string|+|_Name of the kid._|
|__surname__|string|+|_Surname of the kid._|
|__telephone__|number|-|_Telephone number of the kid._|
## __Examples__
```
```