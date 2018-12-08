# __Example Array Enum Schema__

Parsed from file: [simple-array-enum.json](https://github.com/McCastles/JMC/blob/master/examples/simple/simple-array-enum.json)
> Simple schema
* [Properties](#properties)
	* [people](#people)
## __Properties__
|Key|Type|Format|Required|Description|
|-|:-:|:-:|:-:|-|
|__people__|[array](people)|*|yes|List of guests|
### __people__
_List of guests_

|Key|Type|Format|Required|Parent|Description|
|-|:-:|:-:|:-:|:-:|-|
|__people[0]__|string|*|no|[people](people)|Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`. Default is `Starr`.|