# __Example Array With Object Enum Schema__

Parsed from file: [tuple-array-with-object-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-array-with-object-enum.json)
> Simple schema with array (one of the values is an object) with enumerated values
* [Properties](#properties)
	* [people](#people)
		* [people[2]](#people[2])
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__people__|[array](people)|*|yes|List of guests|
### __people__
_List of guests_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__people[0]__|string|*|no|[people](#people)|Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`|
|__people[1]__|number|*|no|[people](#people)|Place|
|__people[2]__|[object](#people[2])|*|no|[people](#people)|Children of the person|
### __people[2]__
_Children of the person_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__name__|string|*|yes|[people[2]](#people[2])|Name of the kid|
|__surname__|string|*|yes|[people[2]](#people[2])|Surname of the kid|
|__telephone__|number|*|no|[people[2]](#people[2])|Telephone number of the kid|