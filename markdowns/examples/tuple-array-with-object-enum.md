# __Example Array With Object Enum Schema__
Parsed from file: [tuple-array-with-object-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-array-with-object-enum.json)

> Simple schema with array (one of the values is an object) with enumerated values
* [Properties](#properties)
	* [people](#people)
		* [people[0]](#people)
		* [people[1]](#people)
		* [people[2]](#people[2])
			* [name](#people[2])
			* [surname](#people[2])
			* [telephone](#people[2])
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|List of guests|
### __people__
_List of guests_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people[0]__|string|-|Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`|
|__people[1]__|number|-|Place|
|__people[2]__|[object](#people[2])|-|Children of the person|
### __people[2]__
_Children of the person_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__name__|string|+|Name of the kid|
|__surname__|string|+|Surname of the kid|
|__telephone__|number|-|Telephone number of the kid|