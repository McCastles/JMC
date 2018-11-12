# __tuple array schema__
Parsed from file: [tuple-array.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array.json)

_Schema with a tuple array (array with items of different types)_
## Table of Contents
* [Properties](#properties)
	* [sampleArray](#sampleArray)
		* [sampleArray[0]](#sampleArray)
		* [sampleArray[1]](#sampleArray)
	* [people](#people)
		* [people[0]](#people)
		* [people[1]](#people)
		* [people[2]](#people)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__sampleArray__|[object[]](#sampleArray)|-|Lack of descripton|
|__people__|[object[]](#people)|+|Famous people|
### __sampleArray__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__sampleArray[0]__|number|-|Lack of descripton|
|__sampleArray[1]__|string|-|Lack of descripton|
### __people__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people[0]__|string|-|Name of the person|
|__people[1]__|boolean|-|Is male?|
|__people[2]__|number|-|Telephone number of the person|
## __Example__
```
{
    "sampleArray": [
        42,
        "Sample string"
    ],
    "people": [
        "Sample string",
        "true",
        42
    ]
}
```