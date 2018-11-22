# __Example Array Enum Schema__
Parsed from file: [simple-array-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-array-enum.json)

> Simple schema
* [Properties](#properties)
	* [people](#people)
		* [people[0]](#people)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|List of guests|
### __people__
_List of guests_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people[0]__|string|-|Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`. Default is `Starr`.|