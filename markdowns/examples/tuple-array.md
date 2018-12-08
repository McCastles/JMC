# __tuple array schema__

Parsed from file: [tuple-array.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array.json)
> Schema with a tuple array (array with items of different types)
* [Properties](#properties)
	* [sampleArray](#sampleArray)
	* [people](#people)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__sampleArray__|[array](sampleArray)|*|no|Lack of descripton|
|__people__|[array](people)|*|yes|Famous people|
### __sampleArray__
|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__sampleArray[0]__|number|*|no|[sampleArray](#sampleArray)|Lack of descripton|
|__sampleArray[1]__|string|*|no|[sampleArray](#sampleArray)|Lack of descripton|
### __people__
_Famous people_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__people[0]__|string|*|no|[people](#people)|Name of the person|
|__people[1]__|boolean|*|no|[people](#people)|Is male?|
|__people[2]__|number|*|no|[people](#people)|Telephone number of the person|