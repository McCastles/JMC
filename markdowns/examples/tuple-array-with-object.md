# __Tuple array schema with object__

Parsed from file: [tuple-array-with-object.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array-with-object.json)
> Schema with a tuple array (array with items of different types), one of which is an object
* [Properties](#properties)
	* [people](#people)
		* [people[3]](#people[3])
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__people__|[array](#people)|*|yes|Famous people|
### __people__
_Famous people_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__people[0]__|string|*|no|[people](#people)|Name of the person|
|__people[1]__|boolean|*|no|[people](#people)|Is male?|
|__people[2]__|number|*|no|[people](#people)|Telephone number of the person|
|__people[3]__|[object](#people[3])|*|no|[people](#people)|Children of the person|
### __people[3]__
_Children of the person_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__name__|string|*|yes|[people[3]](#people[3])|Name of the kid|
|__surname__|string|*|yes|[people[3]](#people[3])|Surname of the kid|
|__telephone__|number|*|no|[people[3]](#people[3])|Telephone number of the kid|