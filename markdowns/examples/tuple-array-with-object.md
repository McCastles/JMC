# __Tuple array schema with object__
Parsed from file: [tuple-array-with-object.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array-with-object.json)

_Schema with a tuple array (array with items of different types), one of which is an object_
## Table of Contents
* [Properties](#properties)
	* [people](#people)
		* [people[0]](#people)
		* [people[1]](#people)
		* [people[2]](#people)
		* [people[3]](#people[3])
			* [name](#people[3])
			* [surname](#people[3])
			* [telephone](#people[3])
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|Famous people|
### __people__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people[0]__|string|-|Name of the person|
|__people[1]__|boolean|-|Is male?|
|__people[2]__|number|-|Telephone number of the person|
|__people[3]__|[object](#people[3])|-|Children of the person|
### __people[3]__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|string|+|Name of the kid|
|__surname__|string|+|Surname of the kid|
|__telephone__|number|-|Telephone number of the kid|