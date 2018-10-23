# __tuple array schema__
Parsed from file: [tuple-array.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array.json)

_Schema with a tuple array (array with items of different types)_
## __Structure__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__sampleArray__|[object[]](#sampleArray)|-|Lack of descripton|
|__people__|[object[]](#people)|+|Famous people|
### __sampleArray__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|number|-|Lack of descripton|
|__Item2__|string|-|Lack of descripton|
### __people__
_Famous people_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__Item1__|string|-|Name of the person|
|__Item2__|boolean|-|Is male?|
|__Item3__|number|-|Telephone number of the person|