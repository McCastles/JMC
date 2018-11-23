# __Example Array Enum Schema__
> Tuple array schema

Parsed from file: [tuple-array-enum.json](https://github.com/McCastles/JMC/blob/master/examples/tuple-array-enum.json)
* [Properties](#properties)
	* [people](#people)
		* [people[0]](#people)
		* [people[1]](#people)
* [Example](#example)
## __Properties__

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people__|[object[]](#people)|+|List of guests|
### __people__
_List of guests_

|Key|Type|Required|Description|
|-|:-:|:-:|-|
|__people[0]__|string|-|Guest's surname. Possible values: `Lennon` `McCartney` `Harrison` `Starr`. Default is `Starr`.|
|__people[1]__|number|-|Place|
## __Example__
```
{
    "people": [
        "Starr",
        42
    ]
}
```